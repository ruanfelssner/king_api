const Car = require('../database/models/Cars')

const Cars = {
    all(req, res, next){
        Car.findAll()
        .then((result) => {
            res.json(result);
        })
        .catch(next)
    },
    create(req, res, next){
        const {brand, model, hp} = req.body;
        Car.create({
            brand,
            model,
            hp
        })
        .then((result) => {
            res.status(201).json(result) // retorna o id
        })
        .catch(next)
    }
}

module.exports = Cars;