
const Rifa = require('../database/models/Rifas');
module.exports = {
    rifas(req, res, next) {        
        Rifa.findAll()
        .then(rifas => {
            return res.status(200).json({rifas})
        })
    },
    add(req, res, next){
        const {name, nomeRazao, cpfCnpj, email, instagram, whatsapp, tipoPagamento, tipoRifa, qtdCotasDisponiveis, qtdCotas, valorCotas, referenciaSorteio, responsavel, cidade, estado, fabricante, modelo, versao, motor, anoModelo, cor, avatar, descricao} = req.body;
        Rifa.create({
            name,
            nomeRazao,
            cpfCnpj,
            email,
            instagram,
            whatsapp,
            tipoPagamento,
            tipoRifa,
            qtdCotasDisponiveis,
            qtdCotas,
            valorCotas,
            referenciaSorteio,
            responsavel,
            cidade,
            estado,
            fabricante,
            modelo,
            versao,
            motor,
            anoModelo,
            cor,
            avatar,
            descricao
        })
        .then((result) => {
            res.status(201).json(result) // retorna o id
        })
        .catch(next)
    }
}