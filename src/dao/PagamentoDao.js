var mongoose = require("mongoose");

class PagamentoDao {

    constructor(){
        this.pagamentoModel = mongoose.model("PagamentoModel");
    }

    atualizar(id,pagamento){
        return this.pagamentoModel.findByIdAndUpdate(id,pagamento,{new: true});
    }

    salvar(pagamento){
        return this.pagamentoModel.create(pagamento);
    }


    listar() {
        return this.pagamentoModel.find({});
    }

    buscarPorId(id) {
        return this.pagamentoModel.findById(id);
    }

    apagar(id){
        return this.pagamentoModel.remove({_id: id});
    }
}

module.exports = new PagamentoDao();

