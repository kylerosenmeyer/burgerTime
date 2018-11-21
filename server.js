const 
    express = require("express"),
    handlebars = require("express-handlebars"),
    app = express(),
    PORT = process.env.POT || 8080,
    controller = require("./controller/burger_controller.js")

app.use( express.urlencoded( { extended: true } ) )
app.use( express.json() )
app.use( express.static( "burgerTime/public" ) )
app.engine("handlebars", handlebars({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

controller(app)

app.listen( PORT, () => { console.log( "App listening on PORT " + PORT ) } ) 