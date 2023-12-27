let namearr = []
let firstName = document.getElementById("first-name")
let lastName = document.getElementById("last-name")
let list = document.getElementById("list")
let addName = document.getElementById("add-name")

addName.addEventListener("click", function() {
    namearr.push(firstName.value + " " + lastName.value)
    firstName.value = ""
    lastName.value = ""
    renderNames()
})

function renderNames() {
    let listItems = ""
    for (let i = 0; i < namearr.length; i++) {
        listItems = "<li>" + namearr[i] + "</li>"
    }
    list.innerHTML += listItems
}