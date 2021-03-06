var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var cors = require('cors');
app.use(cors());

//configuração do server para usar o body-parser
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(bodyParser.json({limit: '10mb'}));

//const db = require('../src/app/config/db.config.js');
const db = require('./src/config/db.config')
  
// force: true will drop the table if it already exists
// apaga a tabela se já existir

  /*    
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
});
   */    



require('./src/route/empresa.route')(app);
require('./src/route/usuario.route')(app);
require('./src/route/segmento.route')(app);
require('./src/route/promocao.route')(app);
require('./src/route/cliente.route')(app);
require('./src/route/cupom.route')(app);

 
// Create a Server
var server = app.listen(80, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})


module.exports = server;

