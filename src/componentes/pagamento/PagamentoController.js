var PagamentoBo = require("./PagamentoBo");
var guard = require('express-jwt-permissions')()

class PagamentoController{
    constructor(route){
        route.post("/pagamentos",guard.check([['ADMIN'],['AUTENTICADO']]),this.salvar.bind(this));
        route.get("/pagamentos", this.listar.bind(this));
        route.get("/pagamentos/:id", this.buscarPorId.bind(this));
        route.delete("/pagamentos/:id", guard.check('ADMIN'), this.apagar.bind(this));
        route.put("/pagamentos/:id",guard.check([['ADMIN'],['AUTENTICADO']]),this.atualizar.bind(this));

    }

    listar(req,resp){


        PagamentoBo.listar().then(
            function (resposta) {
                resp.json(resposta);
            },
            function (error) {
                resp.status(500).json(error);
            }
        );
    }

    buscarPorId(req,resp){
        PagamentoBo.buscarPorId(req.params.id).then(
            function (resposta) {
                resp.json(resposta);
            },
            function (error) {
                resp.status(500).json(error);
            }
        );
    }

    salvar(req,resp){
        let pagamento = req.body;
        console.log(pagamento);
        PagamentoBo.salvar(pagamento).then(
            function (pagamento) {
                resp.json(pagamento);
            },
            function (error) {
                resp.status(500).json(error);
            }
        );
    }

    atualizar(req,resp){
        let pagamento = req.body;
        PagamentoBo.atualizar(req.params.id,pagamento).then(
            function (retorno) {
                resp.json(retorno);
            },
            function (error) {
                resp.status(500).json(error);
            }
        );
    }

    apagar(req,resp){

        PagamentoBo.apagar(req.params.id).then(
            function () {
                resp.sendStatus(204);
            },
            function (error) {
                resp.status(500).json(error);
            }
        );
    }
}

module.exports = PagamentoController;