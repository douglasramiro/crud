var PagamentoService = require("../service/PagamentoService");

class PagamentoController{
    constructor(route){
        route.post("/pagamentos",this.salvar.bind(this));
        route.get("/pagamentos", this.listar.bind(this));
        route.get("/pagamentos/:id", this.buscarPorId.bind(this));
        route.delete("/pagamentos/:id", this.apagar.bind(this));
        route.put("/pagamentos/:id", this.atualizar.bind(this));

    }

    listar(req,resp){
        PagamentoService.listar().then(
            function (resposta) {
                resp.json(resposta);
            },
            function (error) {
                resp.status(500).json(error);
            }
        );
    }

    buscarPorId(req,resp){
        PagamentoService.buscarPorId(req.params.id).then(
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
        PagamentoService.salvar(pagamento).then(
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
        PagamentoService.atualizar(req.params.id,pagamento).then(
            function (retorno) {
                resp.json(retorno);
            },
            function (error) {
                resp.status(500).json(error);
            }
        );
    }

    apagar(req,resp){

        PagamentoService.apagar(req.params.id).then(
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