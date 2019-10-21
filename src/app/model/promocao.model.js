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
        situacao: {
            type: Sequelize.INTEGER
        },
        nomePromocao : {
            type: Sequelize.STRING
        },
        imagem: {
            type: Sequelize.BLOB('long')
        }
    },{
        freezeTableName: true //cria a tabela no singular
    });

    return Promocao;
}
