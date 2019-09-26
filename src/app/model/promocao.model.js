module.exports = (sequelize, Sequelize) => {
    const Promocao = sequelize.define('promocao', {
        idPromocao: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        valor: {
            type: Sequelize.FLOAT
        },
        validade: {
            type: Sequelize.DATE
        },
        idProduto: {
            type: Sequelize.INTEGER
        },
        idEmpresa: {
            type: Sequelize.INTEGER
        },
        utilizado: {
            type: Sequelize.ENUM('S','N')
        }
    },{
        freezeTableName: true //cria a tabela no singular
    });

    return Promocao;
}
