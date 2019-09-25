module.exports = function (app) {

    const empresa = require('../controller/empresa.controller');

    // Cadastro EMPRESA
    app.post('/api/empresa', empresa.create);

    


}