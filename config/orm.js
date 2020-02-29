var connection = require('./connection.js');

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  

var orm = {

    selectAll : function(tableInput, colToSearch, valOfCol){

        var query = "SELECT * FROM ?? WHERE ?? = ?";

        connection.query(query, [tableInput, colToSearch, valOfCol], function(err,res){

            if (err) throw err;

            console.log(res);

        })

    },

    insertOne : function(table, cols, vals, cd) {

        var query = "INSERT INTO " + table;

        query += " (";
        query += cols.toString();
        query += ") ";
        query += "VALUES (";
        query += printQuestionMarks(vals.length);
        query += ") ";

        console.log(query);

        connection.query(query, vals, function(err,res){

            if (err) throw err;

            cd(res);

        }
        

        )

    }

}
module.exports = orm;