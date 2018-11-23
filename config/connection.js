const 
    mysql = require("mysql"),
    connection = mysql.createConnection(process.env.JAWSDB_URL)

connection.connect( (err) => {

  if (err) {

    console.error("error connecting: " + err.stack)
    return
  }

  console.log("connected as id " + connection.threadId);

})

module.exports = connection
