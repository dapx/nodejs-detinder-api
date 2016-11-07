import dbconfig from '../dbconfig';
import mysql from 'mysql';
let conn = mysql.createConnection(dbconfig);

export class Detentos {

  get(res){
    conn.query('select * from Detentos', function(err, result){
      res.send(result);
    });
  }
  
/*
  post(detento, res){
    console.log(detento);
    conn.query('insert into Detentos (ind_id) values (?)', detento.ind_id, function(err, result){
      if (err) {
        console.error(err);
        res.send({status: 1, message: 'Error! Detento not created.'});
      } else {
        console.log(result);
        res.send({status: 0, message: 'Detento created'});
      }
    });
  }*/

}
