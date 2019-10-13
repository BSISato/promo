const db = require('../config/db.config');
const Cupom = db.cupom;


// Post Empresa
exports.create = async (dados) => {
console.log(dados);
    Cupom.create(dados)
}
//Get By ID
exports.getById = async (id) => {
    const res = await Cupom.findByPk(id);
    return res;
}
//Get All
exports.getAll = async () => {
    const res = await Cupom.findAll();
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
            idEmpresa: data.idEmpresa,
            idCliente: data.idCliente,
            idPromocao: data.idPromocao
    }, {
        where: { idCupom: id }
    });
}
//Delete
exports.delete = async (id) => {
    await Promocao.destroy({
        where:{
            idCupom:id
        }
    })
}





