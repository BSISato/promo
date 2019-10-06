module.exports = (sequelize, Sequelize) => {
    const Cliente = sequelize.define('cliente', {
        idCliente: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        nome: {
            type: Sequelize.STRING
        },
        telefone: {
            type: Sequelize.INTEGER
        },
        email: {
            type: Sequelize.STRING
        },
        senha: {
            type: Sequelize.STRING
        },
        segmento1 : {
            type: Sequelize.STRING
        },
        segmento2 : {
            type: Sequelize.STRING
        },
        segmento3 : {
            type: Sequelize.STRING
        },
        idEmpresa: {
            type: Sequelize.INTEGER
        }
    },{
        freezeTableName: true //cria a tabela no singular
    });

    return Cliente;
}
