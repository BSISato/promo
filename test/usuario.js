var chai = require('chai');
var server = require('../server');
var chaiHttp = require('chai-http');
var Usuario = require('../src/app/model/usuario.model');
var should = chai.should();

chai.use(chaiHttp);

describe('Usuario', function () {

    it('Inserindo novo usuário', function (done) {

        var novoUsuario = {

            nome: 'Rogerio',
            email: 'aaaa@gmail.com',
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
            email: 'aaa@gmail.com',
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
            .get('/api/usuario/1')
            .end(function (err, res) {

                res.should.have.status(200);

                done();
            });
    });

    it('Alterar Usuario', function (done) {

        var usuarioAlterado = {

            nome: 'rogeriiiiio',
            email: 'aaa@gmail.com',
            senha: 1000,
            nivel: 1,
             idEmpresa: 2
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
            .delete('/api/usuario/delete/39')
            .end(function (err, res) {

                res.should.have.status(200);
                

                done();
            });
    });
});