
var repository = require('../repositories/empresa.repository');

//Post Empresa
exports.create = async (req, res) => {
    try {
        await repository.create({
            razaoSocial: req.body.razaoSocial,
            nomeFantasia: req.body.nomeFantasia,
            cnpj: req.body.cnpj,
            segmento: req.body.segmento,
            responsavel: req.body.responsavel,
            email: req.body.email,
            senha: req.body.senha,
            endereco: req.body.endereco,
            numero: req.body.numero,
            cidade:req.body.cidade,
            bairro: req.body.bairro,
            cep: req.body.cep,
            sobreEmpresa: req.body.sobreEmpresa

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
        if (!data) {
            res.status(200).send({
                message: "Cadastro inexistente",
            });
        }else{
            res.status(200).send({
                message: "Empresa",
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
//Put
exports.put = async (req, res) => {
    try {
        const id = req.params.altid;
        var data = await repository.put(id, req.body);
        res.status(200).send({
            message: "Empresa atualizada com sucesso",
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
            message: "Empresa removida"
        });
    } catch (error) {
        res.status(500).send({
            message: "Falha na requisição",
            erro: error
        });
    }
}

