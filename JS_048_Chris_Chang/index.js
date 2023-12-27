let stacked = document.getElementById("stack")
let queued = document.getElementById("queue")
let stk = []
let que = []


function add() {
    let input = prompt("Please enter something", "something")
    if (input != null){
        stk.push(input)
        que.push(input)
        stacked.innerHTML = stk             
        queued.innerHTML = que
    }
}

function remove() {
    stk.shift() 
    que.pop()
    stacked.innerHTML = stk         
    queued.innerHTML = que 
    if(stk.length == 0){
        stacked.innerHTML = "Stack is empty"         
        queued.innerHTML = "Queue is empty"
    }
}