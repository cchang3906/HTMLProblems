let namearr = []
let inputfield = document.getElementById("input-field")
let addbutton = document.getElementById("add-btn")
let removebutton = document.getElementById("remove-btn")
let list = document.getElementById("loi")

function inputname() {
    namearr.push(inputfield.value)
    inputfield.value = "";
    list.innerHTML = namearr
}

function removename() {
    for (let i = 0; i < namearr.length; i++){
        if (namearr[i] == inputfield.value){
            namearr.splice(i, 1)
        }
    }
    list.innerHTML = namearr
    inputfield.value = ""
}