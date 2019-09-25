module.exports = (sequelize, Sequelize) => {
    const Produto = sequelize.define('produto', {
        idProduto: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        descricao: {
            type: Sequelize.STRING
        },
        qtde: {
            type: Sequelize.INTEGER
        },
        idSegmento: {
            type: Sequelize.INTEGER
        }
    },{
        freezeTableName: true //cria a tabela no singular
    });

    return Produto;
}
