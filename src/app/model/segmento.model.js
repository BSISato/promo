module.exports = (sequelize, Sequelize) => {
    const Segmento = sequelize.define('segmento', {
        idSegmento: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        descricao: {
            type: Sequelize.STRING
        }
      
    },{
        freezeTableName: true //cria a tabela no singular
    });

    return Segmento;
}
