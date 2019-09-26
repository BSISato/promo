var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

//configuração do server para usar o body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
require('./src/route/produto.route')(app);
require('./src/route/promocao.route')(app);

 
// Create a Server
var server = app.listen(3000, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})




