
const Rifa = require('../database/models/Rifas');
module.exports = {
    rifas(req, res, next) {        
        Rifa.findAll({ limit: 10, order: [['updatedAt', 'DESC']], where: {statusRifa: 1} })
        .then(rifas => {
            return res.status(200).json({rifas})
        })
    },
    add(req, res, next){
        const {name, statusRifa, nomeRazao, cpfCnpj, email, instagram, whatsapp, tipoPagamento, tipoRifa, qtdCotasDisponiveis, qtdCotas, valorCotas, referenciaSorteio, responsavel, cidade, estado, fabricante, modelo, versao, motor, anoModelo, cor, avatar, descricao} = req.body;
        Rifa.create({
            name,
            statusRifa,
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
    },
    del(req, res, next){
        
        const { rifa_id, statusRifa } = req.body;
        Rifa.findOne({
            where: {
                rifa_id: rifa_id
            }
        }).then((rifa) => {
            if(!rifa) return res.status(401).json({error: 'Rifa não existe.'})
            rifa.update({ statusRifa: statusRifa })
            .then(() => {
                return res.status(200).json({ mensagem: "Alterado com sucesso!" })
            })
            .catch(() => {
                return res.status(401).json({error: 'Rifa não existe.'})
            })
        })
    }
}