
var repository = require('../repositories/usuario.repository');

//Post Usuario
exports.create = async (req, res) => {
    try {
        await repository.create({
            nome : req.body.nome,
            senha: req.body.senha,
            nivel: req.body.nivel,
            idEmpresa: req.body.idEmpresa
        });
        res.status(201).send({
            message: "Usuário cadastrado com sucesso"
        });
    }catch(e) {
        console.log(e);
        res.status(500).send({
            message:"Falha ao cadastrar USUÁRIO"
        })
    }
}
//Get ById
exports.getById = async (req, res) => {
    var id = req.params.usuarioid;

    try {
        var data = await repository.getById(id);
        res.status(200).send({
            message: "usuario: ",
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
            message: "usuarios:",
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
            message: "usuario removido"
        });
    } catch (error) {
        res.status(500).send({
            message: "Falha na requisição",
            erro: error
        });
    }
}

