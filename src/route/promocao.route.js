module.exports = function (app) {

    const promocao = require('../controller/promocao.controller');

    // Cadastro PROMOÇÃO
    app.post('/api/promocao', promocao.create);

    


}