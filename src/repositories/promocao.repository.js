const db = require('../config/db.config');
const Promocao = db.promocao;


// Post Empresa
exports.create = async (dados) => {

    Promocao.create(dados)
}
//Get By ID
exports.getById = async (id) => {
    const res = await Promocao.findByPk(id);
    return res;
}
//Get All
exports.getAll = async () => {
    const res = await Promocao.findAll();
    return res;
}
//Delete
exports.delete = async (id) => {
    await Promocao.destroy({
        where:{
            idPromocao:id
        }
    })
}





