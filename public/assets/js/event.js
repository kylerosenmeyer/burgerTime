//Event Listener for clicking the Add Da Burger button. 
$("#addBurger").click( () => {

    let burgercheck = $("#burgerName").val().trim(),
        newBurger = {
            burger_name: burgercheck,
            burger_devoured: 0
        }
    
    console.log("addedBurger: ", newBurger)
    $.post("/api/addburger", newBurger).then( () => { location.reload() } )
})

//Event Listener for clicking the Eat Da Burger button.
$(".eatBurger").click( function() {
    
    let bfID = $(this).attr("data-id"),
        eatenBurger = {
            burger_id: bfID,
            burger_name: $("#bfID").text(),
            burger_devoured: 1
        }

    console.log("eatenBurger: ", eatenBurger)
    $.ajax({
        url: "/api/actionburger", 
        method: "PUT",
        data: eatenBurger
    }).then( () => { location.reload() } )
})

//Event Listener for clicking the "Put This Burger Back On The Menu" button.
$(".restoreBurger").click( function() {
    
    let bfID = $(this).attr("data-id")

    let restoredBurger = {
            burger_id: bfID,
            burger_name: $("#bfID").text(),
            burger_devoured: 0
        }

    console.log("restoredBurger: ", restoredBurger)
    $.ajax({
        url: "/api/actionburger", 
        method: "PUT",
        data: restoredBurger
    }).then( () => { location.reload() } )
})

//Event Listener for clicking the "Throw Away This Burger" button.
$(".deleteBurger").click( function() {
    
    let bfID = $(this).attr("data-id"),
        thrownBurger = {
            burger_id: bfID,
            burger_name: $("#bfID").text(),
            burger_devoured: 1
        }

    console.log("deletedBurger: ", thrownBurger)
    $.ajax({
        url: "/api/deleteburger", 
        method: "DELETE",
        data: thrownBurger
    }).then( () => { location.reload() } )
})

//Event Listener for clicking the "Update Burger" button.
$("#changeBurger").click( () => {
    event.preventDefault()
    let bfID = $(".same-as-selected").attr("id"),
        burgerUpdate = {
            burger_id: bfID,
            burger_name: $("#burgerUpdate").val().trim(),
            burger_devoured: 0
        }
    
    console.log("burger update: ", burgerUpdate)
    
    $.ajax({
        url: "/api/updateburger",
        method: "PUT",
        data: burgerUpdate
    }).then( () => { location.reload() } )
})



