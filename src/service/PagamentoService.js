var PagamentoDao = require("../dao/PagamentoDao");

class PagamentoService {

    salvar(pagamento,callback){
        pagamento.status = "Criado";
        pagamento.data = new Date();

        PagamentoDao.salvar(pagamento,callback);
    }
}

module.exports = new PagamentoService();