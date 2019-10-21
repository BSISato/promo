
var repository = require('../repositories/promocao.repository');

//Post Promocao
exports.create = async (req, res) => {
    try {
        await repository.create({
            segmento: req.body.segmento,
            descricao : req.body.descricao,
            qtde : req.body.qtde,
            valorReal : req.body.valorReal,
            valorPromocao : req.body.valorPromocao,
            validade: req.body.validade,
            idEmpresa: req.body.idEmpresa,
            situacao : req.body.situacao,
            nomePromocao : req.body.nomePromocao,
            imagem: req.body.imagem
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
        if (!data) {
            res.status(200).send({
                message: "Promoção inexistente",
            });
        }else{
            res.status(200).send({
                message: "Promoção",
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
//Put
exports.put = async (req, res) => {
    try{
        const id = req.params.altid;
        var data = await repository.put(id, req.body);
        console.log(data);
        res.status(200).send({
            message: "Promoção atualizada com sucesso",
            data
            
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
            message: "promoção removida"
        });
    } catch (error) {
        res.status(500).send({
            message: "Falha na requisição",
            erro: error
        });
    }
}

