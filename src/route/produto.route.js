module.exports = function (app) {

    const controller = require('../controller/produto.controller');

    // Cadastro Produto
    app.post('/api/produto', controller.create);
    //Get ID
    app.get('/api/produto/:produtoid',controller.getById);
    //Get All
    app.get('/api/produto',controller.getAll);
    //Delete
    app.delete('/api/produto/delete/:delid',controller.delete);

    

    


}