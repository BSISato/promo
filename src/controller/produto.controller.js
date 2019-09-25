
var repository = require('../repositories/produto.repository');

//Post Usuario
exports.create = async (req, res) => {
    try {
        await repository.create({
            descricao : req.body.descricao,
            qtde: req.body.qtde,
            idSegmento: req.body.idSegmento
        });
        res.status(201).send({
            message: "Produto cadastrado com sucesso"
        });
    }catch(e) {
        console.log(e);
        res.status(500).send({
            message:"Falha ao cadastrar Produto"
        })
    }
}

