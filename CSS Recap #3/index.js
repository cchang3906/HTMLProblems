let dice = [];
let hasRollsLeft = true;
let rollsLeft = 3;
let rollCount = 0;
let highest = 0;
let rollEl1 = document.getElementById("roll1");
let rollEl2 = document.getElementById("roll2");
let rollEl3 = document.getElementById("roll3");
let highestEl = document.getElementById("highest");

function roll() {
    let firstDice = Math.floor(Math.random() * 6) + 1;
    let secondDice = Math.floor(Math.random() * 6) + 1;
    let sum = firstDice + secondDice;
    dice.push(firstDice, secondDice);
    if (hasRollsLeft) {
        if (rollCount === 0) {
            rollEl1.textContent = firstDice + "+" + secondDice + "=" + sum;
            
        }
        if (rollCount === 1) {
            rollEl2.textContent = firstDice + "+" + secondDice + "=" + sum;
        }
        if (rollCount === 2) {
            rollEl3.textContent = firstDice + "+" + secondDice + "=" + sum;
        }
        if (sum > highest) {
                highest = sum;
                highestEl.textContent = "Highest: " + highest;
            }
        rollCount++;
        if (rollCount === 3) {
        hasRollsLeft = false;
        }
    }
}

function reset() {
    dice = [];
    hasRollsLeft = true;
    rollsLeft = 3;
    rollCount = 0;
    rollEl1.textContent = "";
    rollEl2.textContent = "";
    rollEl3.textContent = "";
}