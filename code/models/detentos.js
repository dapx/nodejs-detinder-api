import dbconfig from '../dbconfig';
import mysql from 'mysql';
let conn = mysql.createConnection(dbconfig);

export class Detentos {

  get(res){
    conn.query('select * from Detentos', function(err, result){
      res.send(result);
    });
  }

  findDetentoById(ind_id, res){
    var sql = `select * from Detentos where ind_id=${ind_id}`;
    conn.query(sql, function(err, result){
      if (err) {
        console.error(err);
      }
      console.log(result)
      res.send(result);
    });
  }

  findDetentoByReq(detento, res){
    var sql = 'select * from Detentos';
    let detentoObj = detento;
    for (var key in detentoObj){
      if (detentoObj[key].length > 0){
        if (sql === 'select * from Detentos'){
          sql += ' where (';
        } else {
        sql = this.appendAnd(sql);
        }
      }


      for (var value in detentoObj[key]){
        console.log(key);
        if (key !== 'ind_altura'){
          sql += this.mountSQL(key, detentoObj[key][value]);
        } else {
          sql += this.mountSQLRange(key, detentoObj[key][value]-0.1, detentoObj[key][value]+0.1);
        }
        sql = this.appendOr(sql);
      }
      if (sql !== 'select * from Detentos'){
        sql = sql.slice(0,-2) + ') ';
      }
      //Remove o ultimo OR e fecha o parenteses
      //Adiciona um AND para o proximo campo

    }
  if (sql === 'select * from Detentos where') {
     sql = sql.slice(0,-5);
   }

    /*Codigo antigo que é interessante manter por enquanto

    for (var i = 0; i<columns.length; i++){
      if (i !== 0) sql += " and";
      sql += this.mountSQL(columns[i], values[i]);
    }*/

    console.log(sql);
    conn.query(sql, function(err, result){
      if (err) {
        console.error(err);
      }
      console.log(result)
      res.send(result);
    });
  }

  mountSQL(key, value){
    return " " + key + " like '%" + value + "%'";
  }

  mountSQLRange(key, value, value2){
    return " " + key + " > " + value + " and " + key + " < " + value2;
  }

  appendOr(sql){
    return sql + " or";
  }

  appendAnd(sql){
    return sql + " and (";
  }

  post(detento, res){
    conn.query('insert into Detentos set ?', detento, function(err, result){
      if (err) {
        console.error(err);
        res.send({status: 1, message: 'Error! Detento not created.'});
      } else {
        console.log(result);
        res.send({status: 0, message: 'Detento created'});
      }
    });
  }

}
