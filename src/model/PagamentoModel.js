var mongoose = require('mongoose');

class PagamentoModel {

    constructor(){


        console.log("pagamento model instanciado");

        var schema = mongoose.Schema({
            data: {
                type: Date,
                required: true,
                message: 'A data de pagamento deve ser específicada.'
            },
            formaPagamento:{
                type: String,
                required:true,
                message: 'A forma de pagamento deve ser especificada.'
            },
            moeda: {
                type: String,
                required: true,
                message: 'A moeda deve ser especificada.'
            },
            valor: {
                type: Number,
                required: true,
                message: 'O valor deve ser especificado.'
            }
        });

        mongoose.model('PagamentoModel',schema);
    }
}

module.exports = new PagamentoModel();