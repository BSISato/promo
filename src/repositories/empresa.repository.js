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
        responsavel: data.responsavel,
        email: data.email,
        senha: data.senha,
        endereco: data.endereco,
        numero: data.numero,
        cidade: data.cidade,
        bairro: data.bairro,
        cep: data.cep,
        sobreEmpresa: data.sobreEmpresa
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






