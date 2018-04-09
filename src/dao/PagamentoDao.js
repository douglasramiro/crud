var ConnectionFactory = require("./ConnectionFactory");
class PagamentoDao {

    constructor(conexao){
        this._conexao = ConnectionFactory.conectar();
    }

    salvar(pagamento, callback){
        this._conexao.query('insert into pagamentos SET ? ', pagamento, callback);
    }


    listar(callback) {
        this._conexao.query('select * from pagamentos', callback);
    }

    buscarPorId(id, callback) {
        this._conexao.query('select * from pagamentos where id = ?',[id], callback);
    }
}

module.exports = new PagamentoDao();