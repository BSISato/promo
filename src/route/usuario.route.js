module.exports = function (app) {

    const controller = require('../controller/usuario.controller');

    // Cadastro Usuario
    app.post('/api/usuario', controller.create);
    //Get ID
    app.get('/api/usuario/:usuarioid',controller.getById);
    //Get All
    app.get('/api/usuario',controller.getAll);
    //Delete
    app.delete('/api/usuario/delete/:delid',controller.delete);

    


}