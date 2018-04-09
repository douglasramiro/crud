var PagamentoService = require("../service/PagamentoService");

class PagamentoController{
    constructor(route){
        route.post("/pagamentos",this.salvar.bind(this));
    }

    salvar(req,resp){
        let pagamento = req.body;
        console.log(pagamento);
        PagamentoService.salvar(pagamento,(erro,retorno) => {
           console.log(JSON.stringify(erro));
           console.log(JSON.stringify(retorno));
           pagamento.id = retorno.insertId;
           resp.json(pagamento);
        });
    }
}

module.exports = PagamentoController;