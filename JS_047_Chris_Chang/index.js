let namearr = []
let inputfield = document.getElementById("input-field")
let inputbutton = document.getElementById("input-button")
let nameoutput = document.getElementById("name-output")
let outputbutton = document.getElementById("output-button")

function inputname() {
    namearr.push(inputfield.value)
    inputfield.value = "";
}

outputbutton.addEventListener("click", function() {
    let pickedname = namearr[Math.floor(Math.random() * namearr.length)]
    nameoutput.innerHTML = pickedname
})