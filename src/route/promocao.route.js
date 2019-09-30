module.exports = function (app) {

    const controller = require('../controller/promocao.controller');

    // Cadastro PROMOÇÃO
    app.post('/api/promocao', controller.create);
    //Get ID
    app.get('/api/promocao/:promocaoid',controller.getById);
    //Get All
    app.get('/api/promocao',controller.getAll);
    //Delete
    app.delete('/api/promocao/delete/:delid',controller.delete);

    


}