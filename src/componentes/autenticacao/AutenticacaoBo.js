var jwt = require('jsonwebtoken');
var config = require('../../config/Config');

class AutenticacaoBo{

    constructor(){

        const user1 = {
            nome: 'Douglas Ramiro',
            email: 'contato@douglasramiro.com.br',
            permissions: ['AUTENTICADO', 'ADMIN']
        }

        const user2 = {
            nome: 'Jose da Silva',
            email: 'jose@dasilva.com',
            permissions: ['AUTENTICADO']
        }

        this.perfis =[user1,user2];

    };

    gerarToken(credencial){

        console.log(credencial);

        return new Promise((resolve,reject) => {
            var usuario = this.perfis.find(o => {return o.email === credencial.email});
            console.log(usuario);
            if (usuario && credencial.senha === '123456'){
                const options = {
                    expiresIn: Number(60*60)
                }

                const token = jwt.sign(usuario,config.auth.secret,options);
                resolve(token);
            }else{
                reject('Usuário / Senha inválido');
            }
        });


    }
}

module.exports = new AutenticacaoBo();