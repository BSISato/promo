module.exports = (sequelize, Sequelize) => {
    const Empresa = sequelize.define('empresa', {
        idEmpresa: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        razaoSocial: {
            type: Sequelize.STRING
        },
        nomeFantasia: {
            type: Sequelize.STRING
        },
        cnpj : {
            type: Sequelize.STRING
        },
        responsavel: {
            type: Sequelize.STRING
        }
    },{
        freezeTableName: true //cria a tabela no singular
    });

    return Empresa;
}
