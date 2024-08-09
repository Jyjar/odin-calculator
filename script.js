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
    removeHighlight();
}

function removeHighlight() {
    const highlighted = document.querySelector(".highlightOperator");
    if (highlighted) {
        highlighted.classList.remove("highlightOperator");
    }
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
            outPutText = secoundNumber;
        } else {
            if(firstNumber == false) {
                firstNumber = target.id;
            } else {
                firstNumber += target.id;
            }
            outPutText = firstNumber;
        }
        removeHighlight();
    }

    if(target.className == "operator") {
        if(secoundNumber != false) {
            calculatedValue = calculate(Number(firstNumber), operator, Number(secoundNumber))
            reset()
            outPutText = calculatedValue;
            firstNumber = calculatedValue;
        } 
        operator = target.id;

        removeHighlight();
        target.classList.add("highlightOperator");
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

    /* console.log("firstNumber: " + firstNumber);
    console.log("operator: " + operator);
    console.log("secoundNumber: " + secoundNumber); */
})