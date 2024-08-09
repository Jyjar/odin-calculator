function add(firstNumber, secoundNumber) {
    return firstNumber + secoundNumber;
}

function substract(firstNumber, secoundNumber) {
    return firstNumber - secoundNumber;
}

function multiply(firstNumber, secoundNumber) {
    return firstNumber * secoundNumber;
}

function divide(firstNumber, secoundNumber) {
    return firstNumber / secoundNumber;
}



function calculate(firstNumber, operator, secoundNumber) {
    switch(operator) {
        case '+':
            return add(firstNumber, secoundNumber);
        case '-':
            return substract(firstNumber, secoundNumber);
        case '*':
            return multiply(firstNumber, secoundNumber);
        case '/':
            return divide(firstNumber, secoundNumber);
        default:
            return "ERROR";
    }
}

let firstNumber = false;
let secoundNumber = false;
let operator = false;
let outPutText = "0";

function reset() {
    firstNumber = false;
    secoundNumber = false;
    operator = false;
    outPutText = "0";
}

let output = document.querySelector("#output");

let buttons = document.querySelector("#buttons");

buttons.addEventListener("click", (event) => {
    let target = event.target;

    if(outPutText == 0) {
        outPutText = "";
    }

    if(target.className == "number") {
        if(operator != false) {
            outPutText = "";
            if(secoundNumber == false) {
                secoundNumber = target.id;
            } else {
                secoundNumber += target.id
            }
        } else {
            if(firstNumber == false) {
                firstNumber = target.id;
            } else {
                firstNumber += target.id;
            }
        }
        outPutText += target.id;
    }

    if(target.className == "operator") {
        if(secoundNumber != false) {
            console.log("ok");
            calculatedValue = calculate(Number(firstNumber), operator, Number(secoundNumber))
            reset()
            outPutText = calculatedValue;
            firstNumber = calculatedValue;
        } 
        operator = target.id;
        /* Lägg in att operator ska highlightas*/
    }

    if(target.id == "clear") {
        reset();
    }

    if(target.id == "=") {
        if(operator != false && firstNumber != false && secoundNumber != false) {
            calculatedValue = calculate(Number(firstNumber), operator, Number(secoundNumber))
            reset()
            outPutText = calculatedValue;
            firstNumber = calculatedValue;
        } else if(firstNumber != false) {
            outPutText = firstNumber;
        } else {
            outPutText = "0";
        }
    }

    output.textContent = outPutText;
})