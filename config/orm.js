var connection = require('./connection.js');

var orm = {

    selectAll : function(tableInput, colToSearch, valOfCol){

        var query = "SELECT * FROM ?? WHERE ?? = ?";

        connection.query(query, [tableInput, colToSearch, valOfCol], function(err,res){

            if (err) throw err;

            console.log(res);

        })

    },

    insertOne : function(table, cols, vals, cd) {

        let query = "INSERT INTO ?? (??) = (?)";

        connection.query(query, [table, cols, vals], function(err ,res){

            if (err) throw err;

            
            cd(res);

        });



        connection.query(query, vals, function(err,res){

            if (err) throw err;

            cd(res);

        }
        

        )

    },

    updateOne : function(table, newC, condition, old, cb){

        let query = "UPDATE ?? SET ?? = ? WHERE ?? = ?";

        connection.query(query, [table, newC, newV, condition, old], function(err, res){

            if (err) throw err;

            cd(res);

        });

    }
        }

module.exports = orm;