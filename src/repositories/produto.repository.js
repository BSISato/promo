const db = require('../config/db.config');
const Produto = db.produto;


// Post Empresa
exports.create = async (dados) => {

    Produto.create(dados)
}





