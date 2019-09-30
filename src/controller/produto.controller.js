
var repository = require('../repositories/produto.repository');

//Post Produto
exports.create = async (req, res) => {
    try {
        await repository.create({
            descricao: req.body.descricao,
            qtde: req.body.qtde,
            idSegmento: req.body.idSegmento,
            idEmpresa: req.body.idEmpresa
        });
        res.status(201).send({
            message: "Produto cadastrado com sucesso"
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: "Falha ao cadastrar Produto"
        })
    }
}
//Get ById
exports.getById = async (req, res) => {
    var id = req.params.produtoid;

    try {
        var data = await repository.getById(id);
        res.status(200).send({
            message: "produto: ",
            data
        });
    } catch (error) {
        res.status(500).send({
            message: "Falha na requisição",
            erro: error
        })
    }
}
//Get ALL
exports.getAll = async (req, res) => {
    try {
        var data = await repository.getAll();
        res.status(200).send({
            message: "produtos:",
            data
        });
    } catch (error) {
        res.status(500).send({
            message: "Falha na requisição",
            erro: error
        })
    }
}
exports.delete = async (req, res) => {
    try {
        const id = req.params.delid;
        await repository.delete(id);
        res.status(200).send({
            message: "Produto removido"
        });
    } catch (error) {
        res.status(500).send({
            message: "Falha na requisição",
            erro: error
        });
    }
}



