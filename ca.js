let currentNumber = "";
let firstOperand = "";
let operator = "";

function appendNumber(number) {
    currentNumber += number;
    document.getElementById("result").value = currentNumber;
}

function performOperation(op) {
    if (currentNumber !== "") {
        firstOperand = currentNumber;
        operator = op;
        currentNumber = "";
    }
}

function calculateResult() {
    if (currentNumber !== "" && firstOperand !== "") {
        const num1 = parseFloat(firstOperand);
        const num2 = parseFloat(currentNumber);
        let result = 0;

        if (operator === "+") {
            result = num1 + num2;
        } else if (operator === "-") {
            result = num1 - num2;
        } else if (operator === "/") {
            result = num1 / num2;
        }

        document.getElementById("result").value = result;
        currentNumber = result.toString();
        firstOperand = "";
        operator = "";
    }
}

function clearResult() {
    currentNumber = "";
    firstOperand = "";
    operator = "";
    document.getElementById("result").value = "";
}
