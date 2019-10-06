const db = require('../config/db.config');
const Segmento = db.segmento;


// Post Empresa
exports.create = async (dados) => {

    Segmento.create(dados)
}
//Get By ID
exports.getById = async (id) => {
    const res = await Segmento.findByPk(id);
    return res;
}
//Get All
exports.getAll = async () => {
    const res = await Segmento.findAll();
    return res;
}
//PUT
exports.put = async (id, data) => {

    await Segmento.update({
        descricao : data.descricao
    }, {
        where: { idSegmento: id }
    });
}
//Delete
exports.delete = async (id) => {
    await Segmento.destroy({
        where:{
            idSegmento:id
        }
    })
}





