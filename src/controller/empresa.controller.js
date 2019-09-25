
var repository = require('../repositories/empresa.repository');

//Post Empresa
exports.create = async (req, res) => {
    try {
        await repository.create({
            razaoSocial : req.body.razaoSocial,
            nomeFantasia: req.body.nomeFantasia,
            cnpj: req.body.cnpj,
            responsavel: req.body.responsavel
        });
        res.status(201).send({
            message: "Empresa cadastrada com sucesso"
        });
    }catch(e) {
        console.log(e);
        res.status(500).send({
            message:"Falha ao cadastrar EMPRESA"
        })
    }
}

