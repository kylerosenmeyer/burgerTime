const 
    express = require("express"),
    burger = require("../model/burger.js")


module.exports = function(app) {

    app.use(express.static("./public"))

    app.get("/", (req, res) => {
        
        function allData(data) {
            console.log("back at burger Controller: ", data)
            res.render("index", { burger: data } ) 
        }
        
        burger.allBurgers(allData)
    })
}

    

