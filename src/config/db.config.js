const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  
  host: env.host,
  dialect: env.dialect,
  
 // operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
//

 db.empresa = require ('../app/model/empresa.model')(sequelize, Sequelize);
 db.usuario = require ('../app/model/usuario.model')(sequelize, Sequelize);
 db.segmento = require ('../app/model/segmento.model')(sequelize, Sequelize);
 db.promocao = require ('../app/model/promocao.model')(sequelize, Sequelize);
 db.cliente = require ('../app/model/cliente.model')(sequelize,Sequelize);


module.exports = db;