const db = require('../config/db.config');
const Empresa = db.empresa;


// Post Empresa
exports.create = async (dados) => {

    Empresa.create(dados)
}
//Get By ID
exports.getById = async (id) => {
    console.log(id);
    const res = await Empresa.findByPk(id);
    return res;
}
//Get All
exports.getAll = async () => {
    const res = await Empresa.findAll();
    return res;
}
//Delete
exports.delete = async (id) => {
    await Empresa.destroy({
        where:{
            idEmpresa:id
        }
    })
}






