const db = require('../config/db.config');
const Segmento = db.segmento;


// Post Empresa
exports.create = async (dados) => {

    Segmento.create(dados)
}





