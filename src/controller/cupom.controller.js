
var repository = require('../repositories/cupom.repository');

//Post Cupom
exports.create = async (req, res) => {
    try {
        await repository.create({
            codigoCupom: req.body.codigoCupom,
            qtde : req.body.qtde,
            data : req.body.data,
            utilizado : req.body.utilizado,
            idEmpresa: req.body.idEmpresa,
            idCliente: req.body.idCliente,
            idPromocao: req.body.idPromocao
        });
        res.status(201).send({
            message: "Cupom cadastrado com sucesso"
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
    var id = req.params.cupomid;

    try {
        var data = await repository.getById(id);
        if (!data) {
            res.status(200).send({
                message: "Cupom inexistente",
            });
        }else{
            res.status(200).send({
                message: "Cupom",
                data
            });
        }
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
            message: "Cupons:",
            data
        });
    } catch (error) {
        res.status(500).send({
            message: "Falha na requisição",
            erro: error
        })
    }
}
//Put
exports.put = async (req, res) => {
    try{
        const id = req.params.altid;
        var data = await repository.put(id, req.body);
        res.status(200).send({
            message: "Cupom atualizado com sucesso",
            dados: data
        });
    } catch (error) {
        res.status(500).send({
            message: "Falha da requisição de alteração",
            erro: error
        });
    }
}
exports.delete = async (req, res) => {
    try {
        const id = req.params.delid;
        await repository.delete(id);
        res.status(200).send({
            message: "cupom removido"
        });
    } catch (error) {
        res.status(500).send({
            message: "Falha na requisição",
            erro: error
        });
    }
}

