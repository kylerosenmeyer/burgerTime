const   
    orm = require("../config/orm.js")

//burgers is an object containing property functions to execute various
let burgers = {

    //allBurgers brings in the allBurgers function from burger_controller.js as a callback, and passes it on to orm. js with additional
    //parameters to make a mysql query.
    allBurgers: function(cb) {

        orm.queryAllBurgers("burgers", "burger_name", cb)
    },
    //addBurgers brings in the addBurger function from burger_controller.js as a callback, and passes it on to orm. js with additional
    //parameters to make a mysql query.
    addBurger: function(newBurger, insert) {

        //Since newBurger was passed into addBurger as an object, grab the name and devored state from it.
        let burgerName = newBurger.burger_name,
            burgerDevoured = newBurger.burger_devoured

        //Now the information is assembled for the mysql query, so send the parameters to orm.js.
        orm.queryAddBurger("burgers", burgerName, burgerDevoured, insert)
    }, 
    //eatBurger brings in the eatBurger function from burger_controller.js as a callback, and passes it on to orm. js with additional
    //parameters to make a mysql query.
    statusUpdate: function(burgerAction, eat) {

       let  burgerID = burgerAction.burger_id,
            burgerDevoured = burgerAction.burger_devoured

        orm.queryBurgerStatus("burgers", burgerDevoured, burgerID, eat)
    },
    //nameUpdate brings in the updateBurger function from burger_controller.js as a callback, and passes it on to orm. js with additional
    //parameters to make a mysql query.
    nameUpdate: function(burgerUpdate, update) {

        let burgerID = burgerUpdate.burger_id,
            burgerName = burgerUpdate.burger_name

        orm.queryBurgerUpdate("burgers", burgerName, burgerID, update)
    },
    
    deleteDaBurger: function(burgerDeletion, destroy) {

        let burgerID = burgerDeletion.burger_id

        orm.queryDeleteBurger("burgers", burgerID, destroy)
    }
}

module.exports = burgers

