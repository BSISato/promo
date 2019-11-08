var chai = require('chai');
var server = require('../server');
var chaiHttp = require('chai-http');
//var Usuario = require('../src/app/model/usuario.model');
var should = chai.should();
const db = require('../src/config/db.config');
var Usuario = db.usuario;

chai.use(chaiHttp);

describe('Usuario', function () {
    
    before(function(next){
        
        Usuario.destroy({ truncate : true });
            next();
    });
      
    it('Inserindo usuário 1', function (done) {
        
        var novoUsuario = {

            nome: 'Rogerio',
            email: 'primeiro@gmail.com',
            senha: 123,
            nivel: 1,
            idEmpresa: 2
        };
        
        chai.request(server)
            .post('/api/usuario')
            .send(novoUsuario)
            .end(function (err, res) {

                res.should.have.status(201);

                done();
            });
    });

    it('Inserindo usuário 2', function (done) {
        
        var novoUsuario = {

            nome: 'Jacaré',
            email: 'segundo@gmail.com',
            senha: 123,
            nivel: 1,
            idEmpresa: 2
        };
        
        chai.request(server)
            .post('/api/usuario')
            .send(novoUsuario)
            .end(function (err, res) {

                res.should.have.status(201);

                done();
            });
    });

    it('Teste de email repetido', function (done) {

        var novoUsuario = {

            nome: 'Rogerio',
            email: 'segundo@gmail.com',
            senha: 123,
            nivel: 1,
            idEmpresa: 2
        };

        chai.request(server)
            .post('/api/usuario')
            .send(novoUsuario)
            .end(function (err, res) {

                res.should.have.status(500);

                done();
            });
    });

    it('Pegar Usuario pelo ID', function (done) {

        chai.request(server)
            .get('/api/usuario/2')
            .end(function (err, res) {

                res.should.have.status(200);

                done();
            });
    });

    it('Alterar Usuario', function (done) {

        var usuarioAlterado = {

            nome: 'Sato',
           
        };
        chai.request(server)
            .put('/api/usuario/altera/1')
            .send(usuarioAlterado)
            .end(function (err, res) {

                res.should.have.status(200);
                
                done();
            });
    });
    
    it('Deleta Usuario', function (done) {

        chai.request(server)
            .delete('/api/usuario/delete/2')
            .end(function (err, res) {

                res.should.have.status(200);
                
                done();
            });
    }); 
});