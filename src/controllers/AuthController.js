const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Bearer } = require("permit");

const User = require('../database/models/User');
const permit = new Bearer();

module.exports = {
    login(req, res, next){
        const { email, password } = req.body;
        User.findOne({
            where: {
                email: email
            }
        }).then((usuario) => {
            if(!usuario) return res.status(401).json({error: 'Usuário não existe.'})
            if(!bcrypt.compareSync(password, usuario.password)){
                return res.status(401).json({error: 'Senha inválida'})
            }

            let jwtPayload = { email: usuario.email }
            let token = jwt.sign(jwtPayload, process.env.JWT_SECRET);
            return res.status(200).json({ usuario, token })
        })
    },
    auth(req, res, next){
        const token = permit.check(req);
        if(!token){
            permit.fail(res)
            return res.status(401).json({error: 'Authenticate required!'})
        }
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(err){                
                permit.fail(res)
                return res.status(401).json({error: 'Token inválido!'})
            }
            req.email = decoded.email;
            next();
        })
    },
    all(req, res, next){
        User.findAll()
        .then(users => {
            return res.status(200).json({users})
        })
    },
    add(req, res, next){
        const { name, email, password } = req.body;
        User.create({
            name: name,
            email: email,
            password: bcrypt.hashSync(password, 10)
        })
        .then(async (usuario) => {
            let token = await jwt.sign({ email: usuario.email }, process.env.JWT_SECRET)
            return res.status(200).json({usuario, token})
        })
        .catch(erro => {
            return res.status(401).json({error: 'Erro ao cadastrar'})
        })
    }
}
