
var repository = require('../repositories/empresa.repository');

//Post Empresa
exports.create = async (req, res) => {
    try {
        await repository.create({
            razaoSocial: req.body.razaoSocial,
            nomeFantasia: req.body.nomeFantasia,
            cnpj: req.body.cnpj,
            responsavel: req.body.responsavel
        });
        res.status(201).send({
            message: "Empresa cadastrada com sucesso"
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: "Falha ao cadastrar EMPRESA"
        })
    }
}
//Get ById
exports.getById = async (req, res) => {
    var id = req.params.empresaid;

    try {
        var data = await repository.getById(id);
        res.status(200).send({
            message: "Empresa: ",
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
            message: "Empresas:",
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
            message: "Empresa removida"
        });
    } catch (error) {
        res.status(500).send({
            message: "Falha na requisição",
            erro: error
        });
    }
}

