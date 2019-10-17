const db = require('../config/db.config');
const Cupom = db.cupom;
const Empresa = db.empresa;
const Cliente = db.cliente;
const Promocao = db.promocao;


// Post Cupom
exports.create = async (dados) => {
    
    Cupom.create(dados)
}
//Get By ID
exports.getById = async (id) => {
    const res = await Cupom.findOne({
        where: {
            idCupom:id
        },
        attributes:['idCupom','codigoCupom','qtde','utilizado'],
        include: [{
            model:Empresa,
            attributes:['idEmpresa','nomeFantasia']
        },
        {
            model:Promocao,
            attributes:['idPromocao','valorPromocao','validade','situacao','nomePromocao'],
        },
        {
            model:Cliente,
            attributes:['idCliente','nome','telefone'],
        }]
    })
    return res;
}
//Get All
exports.getAll = async () => {
    const res = await Cupom.findAll({
        attributes:['idCupom','codigoCupom','qtde','utilizado'],
        include: [{
            model:Empresa,
            attributes:['idEmpresa','nomeFantasia']
        },
        {
            model:Promocao,
            attributes:['idPromocao','valorPromocao','validade','situacao','nomePromocao'],
        },
        {
            model:Cliente,
            attributes:['idCliente','nome','telefone'],
        }]
    });
    return res;
}
//PUT
exports.put = async (id, data) => {

    await Cupom.update({
        segmento: data.segmento,
            codigoCupom : data.codigoCupom,
            qtde : data.qtde,
            data : data.data,
            utilizado : data.utilziado,
            empresaIdEmpresa: data.empresaIdEmpresa,
            clienteIdCliente: data.clienteIdCliente,
            promocaoIdPromocao: data.promocaoIdPromocao
    }, {
        where: { idCupom: id }
    });
}
//Delete
exports.delete = async (id) => {
    await Cupom.destroy({
        where:{
            idCupom:id
        }
    })
}





