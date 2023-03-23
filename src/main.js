const buttons = document.querySelectorAll(".btn");
const rField = document.querySelector('#result');
const operators = ['=', '+', '-', '*', '/'];


let result = 0;

buttons.forEach((button) => {
button.addEventListener("click", (event) => {
    let buttonValue = event.target.value;
    try{
        result = parseInt(buttonValue);
    }
    catch {
        console.log('Not a number');
    }
    rField.innerHTML = result;
});
});

