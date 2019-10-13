module.exports = function (app) {

    const controller = require('../controller/cupom.controller');

    // Cadastro PROMOÇÃO
    app.post('/api/cupom', controller.create);
    //Get ID
    app.get('/api/cupom/:cupomid',controller.getById);
    //Get All
    app.get('/api/cupom',controller.getAll);
    //Put
    app.put('/api/cupom/altera/:altid',controller.put);
    //Delete
    app.delete('/api/cupom/delete/:delid',controller.delete);

    


}