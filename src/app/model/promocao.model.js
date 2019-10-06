module.exports = (sequelize, Sequelize) => {
    const Promocao = sequelize.define('promocao', {
        idPromocao: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        segmento: {
            type: Sequelize.STRING
        },
        descricao: {
            type: Sequelize.STRING
        },
        qtde: {
            type: Sequelize.INTEGER
        },
        valorReal: {
            type: Sequelize.FLOAT
        },
        valorPromocao: {
            type: Sequelize.FLOAT
        },
        validade: {
            type: Sequelize.DATE
        },
        idEmpresa: {
            type: Sequelize.INTEGER
        },
    },{
        freezeTableName: true //cria a tabela no singular
    });

    return Promocao;
}
