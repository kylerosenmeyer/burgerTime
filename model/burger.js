const   
    orm = require("../config/orm.js"),
    event = require("../public/assets/js/event.js")


let burgers = {

    allBurgers: function(cb) {

        orm.queryAllBurgers("burgers", "burger_name", cb)
    },
    addBurger: function() {
        let newBurger = $("#newBurgerName").val().trim()
        orm.addBurger("burgers", newBurger)
    },
    updateBurger: function() {
        let updateBurger = $("#updateBurgerName").val().trim(),
            burgerID = $("#burgerID").val()
        orm.updateBurger("burgers", updateBurger, burgerID)
    }
}

module.exports = burgers

