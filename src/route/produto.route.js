module.exports = function (app) {

    const produto = require('../controller/produto.controller');

    // Cadastro EMPRESA
    app.post('/api/produto', produto.create);

    

    


}