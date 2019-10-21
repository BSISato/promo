const db = require('../config/db.config');
const Promocao = db.promocao;


// Post Empresa
exports.create = async (dados) => {
console.log(dados);
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
//PUT
exports.put = async (id, data) => {

    await Promocao.update({
        segmento: data.segmento,
            descricao : data.descricao,
            qtde : data.qtde,
            valorReal : data.valorReal,
            valorPromocao : data.valorPromocao,
            validade: data.validade,
            idEmpresa: data.idEmpresa,
            situacao : data.situacao,
            nomePromocao : data.nomePromocao,
            imagem : data.imagem
    }, {
        where: { idPromocao: id }
    });
    return data;
}
//Delete
exports.delete = async (id) => {
    await Promocao.destroy({
        where:{
            idPromocao:id
        }
    })
}





