const connection = require("./connection.js")

let orm = {

   //* Get All Burgers 
  queryAllBurgers: function(table, column, cb) {

    let query = "SELECT * FROM ?? ORDER BY ?? DESC"

    connection.query(query, [table, column], (err, result) => {

      cb(result)
    })
  },

  //* Add Burger 
  addBurger: function(table, name) {

    let query = "INSERT INTO ?? (burger_name) VALUES (?)"
    
    connection.query(query, [table, name], (err, result) => {

      if (err) throw err
      console.log(result)
    })
  },

  //* Update Burger
  updateBurger: function(table, name, id) {

    let query = "UPDATE ?? SET burger_nam = ? WHERE id = ?"

    connection.query(query, [table, name, id], (err, result) => {

        if (err) throw err
        console.log(result)
      }
    )
  }
}

module.exports = orm

