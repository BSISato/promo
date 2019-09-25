const db = require('../config/db.config');
const Empresa = db.empresa;


// Post Empresa
exports.create = async (dados) => {

    Empresa.create(dados)
}







