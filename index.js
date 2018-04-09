var express = require("express");
var bodyParser = require("body-parser");
var PagamentoController = require("./src/controller/PagamentoController");

class Principal{
   constructor(){
       var app = express();
       var router = express.Router();
       var pc = new PagamentoController(router);

       app.use(bodyParser.json());

       app.use("/api",router);

       app.listen(3000,function () {
           console.log("servidor up");
       });

       app.post("/",(req,resp) => {
           console.log(req.body);
           resp.send("ok");
       });
   }
}

module.exports = new Principal();










