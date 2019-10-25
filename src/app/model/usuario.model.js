module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define('usuario', {
        idUsuario: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        nome: {
            allowNull: false,
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        senha: {
            allowNull: false,
            type: Sequelize.UUID
        },
        nivel : {
            type: Sequelize.STRING
        },
        idEmpresa: {
            allowNull: false,
            type: Sequelize.INTEGER
        }
    },{
        freezeTableName: true //cria a tabela no singular
    });

    return Usuario;
}
