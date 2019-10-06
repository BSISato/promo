module.exports = function (app) {

    const controller = require('../controller/cliente.controller');

    // Cadastro Usuario
    app.post('/api/cliente', controller.create);
    //Get ID
    app.get('/api/cliente/:clienteid',controller.getById);
    //Get All
    app.get('/api/cliente',controller.getAll);
    //Put
    app.put('/api/cliente/altera/:altid',controller.put);
    //Delete
    app.delete('/api/cliente/delete/:delid',controller.delete);

    


}