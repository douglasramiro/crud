var PagamentoDao = require("./PagamentoDao");

class PagamentoBo {

    salvar(pagamento){
        pagamento.status = "Criado";
        pagamento.data = new Date();

        return PagamentoDao.salvar(pagamento);
    }

    listar(){
        return PagamentoDao.listar();
    }

    buscarPorId(id){
        return PagamentoDao.buscarPorId(id);
    }

    apagar(id){
        return PagamentoDao.apagar(id);
    }

    atualizar(id,pagamento){
        return PagamentoDao.atualizar(id,pagamento);
    }
}

module.exports = new PagamentoBo();