import express from 'express';
import bodyParser from 'body-parser';
//import dbconfig from "./dbconfig";
//import mysql from "mysql";
//var connection = mysql.createConnection(dbconfig);
import { Detentos } from './models/detentos';
let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());
let detentos = new Detentos();
app.get('/', function (req, res) {
  detentos.get(res);
});

/*
app.post('/detentos/create', function(req, res){
  console.log(req.body);
  detentos.post(req.body, res);
});
*/
app.listen(8082);
