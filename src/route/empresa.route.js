module.exports = function (app) {

    const controller = require('../controller/empresa.controller');

    // Cadastro EMPRESA
    app.post('/api/empresa', controller.create);
    //Get ID
    app.get('/api/empresa/:empresaid',controller.getById);
    //Get All
    app.get('/api/empresa',controller.getAll);
    //Put
    app.put('/api/empresa/altera/:altid',controller.put);
    //Delete
    app.delete('/api/empresa/delete/:delid',controller.delete);




}