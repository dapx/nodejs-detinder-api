import express from "express";
//import dbconfig from "./dbconfig";
//import mysql from "mysql";
//var connection = mysql.createConnection(dbconfig);
import { Detentos } from "./models/detentos";
var app = express();
var detentos = new Detentos();
app.get("/", function (req, res) {
  detentos.get(res);
});

app.post("/detentos/create", function(req, res){
  detentos.post(req.body, res);
});

app.listen(8082);
