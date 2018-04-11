var express = require("express");
var bodyParser = require("body-parser");
var PagamentoModel = require("./componentes/pagamento/PagamentoModel");
var PagamentoController = require("./componentes/pagamento/PagamentoController");
var AutenticacaoController = require("./componentes/autenticacao/AutenticacaoController");
var MongooseDatabase = require('./config/MongooseDatabase');
var jwt = require('jsonwebtoken');
var config = require('./config/Config');
var guard = require('express-jwt-permissions')();

class Principal{
   constructor(){
       var app = express();
       var router = express.Router();
       var pc = new PagamentoController(router);
       var auth = new AutenticacaoController(router);

       app.use(bodyParser.json());


       app.use((req,resp,next) =>{
           if (req.headers.authentication){
               jwt.verify(req.headers.authentication,config.auth.secret,(err,decoded)=>{
                   if (err){
                       throw new Error(err);
                   } else{
                       req.user = decoded;
                   }
               });
           }
           next();
       });

       app.use("/api",router);

       app.use(function (err, req, res, next) {
           console.log("Erro: "+JSON.stringify(err));
           if (err.code === "permission_denied"){
               res.status(403).json({mensagem: "Acesso Negado"});
           }
           next();
       });



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











