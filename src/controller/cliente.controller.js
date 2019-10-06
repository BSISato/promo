
var repository = require('../repositories/cliente.repository');

//Post Cliente
exports.create = async (req, res) => {
    try {
        await repository.create({
            nome : req.body.nome,
            telefone: req.body.telefone,
            email: req.body.email,
            senha: req.body.senha,
            segmento1: req.body.segmento1,
            segmento2: req.body.segmento2,
            segmento3: req.body.segmento3,
            idEmpresa: req.body.idEmpresa
        });
        res.status(201).send({
            message: "Cliente cadastrado com sucesso"
        });
    }catch(e) {
        console.log(e);
        res.status(500).send({
            message:"Falha ao cadastrar Cliente"
        })
    }
}
//Get ById
exports.getById = async (req, res) => {
    var id = req.params.clienteid;

    try {
        var data = await repository.getById(id);
        if (!data) {
            res.status(200).send({
                message: "Cliente inexistente",
            });
        }else{
            res.status(200).send({
                message: "Cliente",
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
            message: "clientes:",
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
            message: "Cliente atualizado com sucesso",
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
            message: "cliente removido"
        });
    } catch (error) {
        res.status(500).send({
            message: "Falha na requisição",
            erro: error
        });
    }
}

