const db = require('../config/db.config');
const Empresa = db.empresa;


// Post Empresa
exports.create = async (dados) => {

    Empresa.create(dados)
}
//Get By ID
exports.getById = async (id) => {
    const res = await Empresa.findByPk(id);
    return res;
}

//Get All
exports.getAll = async () => {
    const res = await Empresa.findAll();
    return res;
}

//PUT
exports.put = async (id, data) => {

    await Empresa.update({
        razaoSocial: data.razaoSocial,
        nomeFantasia: data.nomeFantasia,
        cnpj: data.cnpj,
        segmento: data.segmento,
        responsavel: data.responsavel
    }, {
        where: { idEmpresa: id }
    });
}
//Delete
exports.delete = async (id) => {
    await Empresa.destroy({
        where: {
            idEmpresa: id
        }
    })
}






