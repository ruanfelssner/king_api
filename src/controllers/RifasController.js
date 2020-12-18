
const Rifa = require('../database/models/Rifas');
module.exports = {
    rifas(req, res, next) {        
        Rifa.findAll()
        .then(rifas => {
            return res.status(200).json({rifas})
        })
    },
    add(req, res, next){
        const {name, qtdCotas, valorCotas} = req.body;
        Rifa.create({
            name,
            qtdCotas,
            valorCotas
        })
        .then((result) => {
            res.status(201).json(result) // retorna o id
        })
        .catch(next)
    }
}