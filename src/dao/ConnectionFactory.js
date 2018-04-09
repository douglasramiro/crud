var mysql = require("mysql");
class ConnectionFactory{

    constructor(){
        console.log("construindo novo cf");
    }

    conectar(){
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'payfast'
        });
    }
}


module.exports = new ConnectionFactory();