const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Bearer } = require("permit");

const User = require('../database/models/User');
const permit = new Bearer();

module.exports = {
    login(req, res, next){
        const { username, password } = req.body;
        User.findOne({
            where: {
                username: username
            }
        }).then((user) => {
            if(!user) return res.status(401).json({error: 'Usuário não existe.'})
            if(!bcrypt.compareSync(password, user.password)){
                return res.status(401).json({error: 'Senha inválida'})
            }

            let jwtPayload = { username: user.username, email: user.email }
            let token = jwt.sign(jwtPayload, process.env.JWT_SECRET);
            return res.status(200).json({ token })
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
            req.username = decoded.username;
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
        User.create({
            username: req.username,
            password: bcrypt.hashSync(req.password, 10)
        })
        .then(users => {
            return res.status(200).json({users})
        })
    }
}
