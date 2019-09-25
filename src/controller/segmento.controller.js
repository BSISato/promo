
var repository = require('../repositories/segmento.repository');

//Post Usuario
exports.create = async (req, res) => {
    try {
        await repository.create({
            descricao : req.body.descricao
        
        });
        res.status(201).send({
            message: "Segmento cadastrado com sucesso"
        });
    }catch(e) {
        console.log(e);
        res.status(500).send({
            message:"Falha ao cadastrar SEGMENTO"
        })
    }
}

