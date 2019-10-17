const db = require('../config/db.config');
const Cliente = db.cliente;
const Empresa = db.empresa;


// Post Cliente
exports.create = async (dados) => {

    Cliente.create(dados)
}
//Get By ID
exports.getById = async (id) => {
    const res = await Cliente.findByPk(id);
    return res;
}
//Get All
exports.getAll = async () => {
    const res = await Cliente.findAll();
    return res;
}
//Put

exports.put = async (id, data) => {
    await Cliente.Update(id,
        {
            $set: {
                nome: data.nome,
                telefone: data.telefone,
                email: data.email,
                senha: data.senha,
                segmento1: data.segmento1,
                segmento2: data.segmento2,
                segmento3: data.segmento3,
                idEmpresa: data.idEmpresa
            }
        });
}
exports.put = async (id, data) => {

    await Cliente.update({
        nome: data.nome,
        telefone: data.telefone,
        email: data.email,
        senha: data.senha,
        segmento1: data.segmento1,
        segmento2: data.segmento2,
        segmento3: data.segmento3,
        idEmpresa: data.idEmpresa
    }, {
        where: { idCliente: id }
    });
}
//Delete
exports.delete = async (id) => {
    await Cliente.destroy({
        where: {
            idCliente: id
        }
    })
}





