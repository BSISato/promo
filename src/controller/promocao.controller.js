
var repository = require('../repositories/promocao.repository');

//Post Promocao
exports.create = async (req, res) => {
    try {
        await repository.create({
            valor : req.body.valor,
            validade: req.body.validade,
            idProduto: req.body.idProduto,
            idEmpresa: req.body.idEmpresa,
            utilizado: req.body.utilizado
        });
        res.status(201).send({
            message: "Promoção cadastrada com sucesso"
        });
    }catch(e) {
        console.log(e);
        res.status(500).send({
            message:"Falha ao cadastrar Promocao"
        })
    }
}

