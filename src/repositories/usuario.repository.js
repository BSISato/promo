const db = require('../config/db.config');
const Usuario = db.usuario;


// Post Empresa
exports.create = async (dados) => {

    Usuario.create(dados)
}
//Get By ID
exports.getById = async (id) => {
    const res = await Usuario.findByPk(id);
    return res;
}
//Get All
exports.getAll = async () => {
    const res = await Usuario.findAll();
    return res;
}
//Delete
exports.delete = async (id) => {
    await Usuario.destroy({
        where:{
            idUsuario:id
        }
    })
}





