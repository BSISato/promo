

module.exports = function (app) {

    const controller = require('../controller/usuario.controller');
    const authService = require('../services/auth-service');

    //autenticação
    app.post('/api/authenticate', controller.autenticacao);  
    // Cadastro Usuario
    app.post('/api/usuario',authService.authorize, controller.create);
    //Get ID
    app.get('/api/usuario/:usuarioid',authService.authorize, controller.getById);
    //Get All
    app.get('/api/usuario',authService.authorize,controller.getAll);
    //Put
    app.put('/api/usuario/altera/:altid',authService.authorize,controller.put);
    //Delete
    app.delete('/api/usuario/delete/:delid',authService.authorize,controller.delete);

    


}