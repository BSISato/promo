
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
//Get ById
exports.getById = async (req, res) => {
    var id = req.params.segmentoid;

    try {
        var data = await repository.getById(id);
        res.status(200).send({
            message: "segmento: ",
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
            message: "segmentos:",
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
            message: "segmento removido"
        });
    } catch (error) {
        res.status(500).send({
            message: "Falha na requisição",
            erro: error
        });
    }
}

