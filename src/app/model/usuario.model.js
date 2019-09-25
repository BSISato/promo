module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define('usuario', {
        idUsuario: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        nome: {
            type: Sequelize.STRING
        },
        senha: {
            type: Sequelize.STRING
        },
        nivel : {
            type: Sequelize.STRING
        },
        idEmpresa: {
            type: Sequelize.INTEGER
        }
    },{
        freezeTableName: true //cria a tabela no singular
    });

    return Usuario;
}
