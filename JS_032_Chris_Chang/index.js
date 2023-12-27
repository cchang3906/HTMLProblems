const nameBtn = document.getElementById('name-btn');
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameBtn.addEventListener('click', function(){
    let name = nameInput.value;
    outputName(name);
    nameInput.value = "";
});
function outputName(name) {
    let sentence = `Nice to meet you ${name}!`;
    nameOutput.innerHTML = sentence;
}

