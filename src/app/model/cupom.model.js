module.exports = (sequelize, Sequelize) => {
    const Cupom = sequelize.define('cupom', {
        idCupom: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        codigoCupom: {
            type: Sequelize.INTEGER
        },
        qtde: {
            type: Sequelize.INTEGER
        },
        data: {
            type: Sequelize.DATE
        },
        utilizado: {
            type: Sequelize.INTEGER
        },
        idEmpresa: {
            type: Sequelize.INTEGER
        },
        idCliente: {
            type: Sequelize.INTEGER
        },
        idPromocao: {
            type: Sequelize.INTEGER
        }        
    },{
        freezeTableName: true //cria a tabela no singular
    });

    return Cupom;
}
