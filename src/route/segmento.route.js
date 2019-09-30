module.exports = function (app) {

    const controller = require('../controller/segmento.controller');

    // Cadastro EMPRESA
    app.post('/api/segmento', controller.create);
    //Get ID
    app.get('/api/segmento/:segmentoid',controller.getById);
    //Get All
    app.get('/api/segmento',controller.getAll);
    //Delete
    app.delete('/api/segmento/delete/:delid',controller.delete);

    


}