import dbconfig from "../dbconfig";
import mysql from "mysql";
var conn = mysql.createConnection(dbconfig);

export class Detentos {

  get(res){
    conn.query("select * from Detentos", function(err, result){
      res.send(result);
    });
  }

  post(detento, res){
    conn.query("insert into Detentos set ?", detento, function(err, result){
      if (err) {
        res.send(err);
      } else {
        console.log(result);
        res.send({status: 0, message: "Detento created"});
      }
    });
  }
}
