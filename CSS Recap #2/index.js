let myLeads = []
const inviteEl = document.getElementById("invite")
const atndBtn = document.getElementById("atndbtn")
const notatndBtn = document.getElementById("natndbtn")
const ulATND = document.getElementById("atnd")
const ulNATND = document.getElementById("notatnd")

atndBtn.addEventListener("click", function() {
    myLeads.push(inviteEl.value)
    inviteEl.value = ""
    renderATND()
})

notatndBtn.addEventListener("click", function() {
    myLeads.push(inviteEl.value)
    inviteEl.value = ""
    renderNATND()
})

function renderATND() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems = "<li>" + myLeads[i] + "</li>"
    }
    ulATND.innerHTML += listItems  
}

function renderNATND() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems = "<li>" + myLeads[i] + "</li>"
    }
    ulNATND.innerHTML += listItems  
}