module.exports = function (app) {

    const segmento = require('../controller/segmento.controller');

    // Cadastro EMPRESA
    app.post('/api/segmento', segmento.create);

    


}