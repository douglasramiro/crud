var AutenticacaoBo = require('./AutenticacaoBo')

class AutenticacaoController {

    constructor(route){
        route.post('/login', this.autenticar.bind(this));
    }

    autenticar(req,resp){
        const credencial = req.body;
        AutenticacaoBo.gerarToken(credencial).then(
            function(token){
                resp.status(201).json({mensagem: 'Autenticado', token: token});
            },
            function (erro) {
                console.log(erro);
                resp.status(401).json({mensagem: erro});
            }
        );
    }
}

module.exports = AutenticacaoController;