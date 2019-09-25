
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

