
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
            message:"Falha ao cadastrar promoção"
        })
    }
}
//Get ById
exports.getById = async (req, res) => {
    var id = req.params.promocaoid;

    try {
        var data = await repository.getById(id);
        res.status(200).send({
            message: "Promoção: ",
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
            message: "promoções:",
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
            message: "promoção removida"
        });
    } catch (error) {
        res.status(500).send({
            message: "Falha na requisição",
            erro: error
        });
    }
}

