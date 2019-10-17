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
        empresaIdEmpresa: {
            type: Sequelize.INTEGER,
        },
        clienteIdCliente: {
            type: Sequelize.INTEGER
        },
        promocaoIdPromocao: {
            type: Sequelize.INTEGER
        }        
    },{
        freezeTableName: true //cria a tabela no singular
    
    });
    
  //  Cupom.associate = function(model) {
   //     Cupom.belongsTo(model.Empresa, {foreignKey: 'idEmpresa', as: 'empresa'})
    //  };

    return Cupom;
}
