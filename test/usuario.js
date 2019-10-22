var chai = require('chai');
var server = require('../server');
var chaiHttp = require('chai-http');
var Usuario = require('../src/app/model/usuario.model');
var should = chai.should();

chai.use(chaiHttp);

describe('Usuario',function(){
  /*  var nome;
    var senha;
    before(function(next){
            Usuario.remove({}, function(err){
            next();
        });
    });*/

    it('Novo Usuario', function(done){

        var novoUsuario = {
            
            nome: 'rogerio',
            email:'aaa@gmail.com',
            senha: 1000,
            nivel: 1,
            idEmpresa:2  
        };

        chai.request(server)
        .post('/api/usuario')
        .send(novoUsuario)
        .end(function(err, res){

            res.should.have.status(201);
         //   res.body.should.have.property('usuario');
          
        done();
        });
        
    });
    it('Pegar Usuario pelo ID', function(done){
        done();
    });
    it('Pegar Usuario pelo senha', function(done){
        done();
    });
    it('Alterar Usuario', function(done){
        done();
    });
    

});