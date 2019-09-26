const db = require('../config/db.config');
const Promocao = db.promocao;


// Post Empresa
exports.create = async (dados) => {

    Promocao.create(dados)
}





