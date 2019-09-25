const db = require('../config/db.config');
const Usuario = db.usuario;


// Post Empresa
exports.create = async (dados) => {

    Usuario.create(dados)
}





