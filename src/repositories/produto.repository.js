const db = require('../config/db.config');
const Produto = db.produto;


// Post Produto
exports.create = async (dados) => {

    Produto.create(dados)
}
//Get By ID
exports.getById = async (id) => {
    const res = await Produto.findByPk(id);
    return res;
}
//Get All
exports.getAll = async () => {
    const res = await Produto.findAll();
    return res;
}
//Delete
exports.delete = async (id) => {
    await Produto.destroy({
        where:{
            idProduto:id
        }
    })
}





