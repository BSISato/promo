module.exports = function (app) {

    const usuario = require('../controller/usuario.controller');

    // Cadastro EMPRESA
    app.post('/api/usuario', usuario.create);

    


}