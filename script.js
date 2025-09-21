const clear=document.querySelector("#clear")
const screen=document.querySelector(".screen")
const buttons = document.querySelectorAll(".button")

let firstOperand="";
let secondOperand="";
let currentOperator = null;
let shouldResetScreen = false;

clear.addEventListener("click", () => {
    screen.textContent=""
    firstOperand=""
    secondOperand=""
    currentOperator=null;
    shouldResetScreen = false;
})

buttons.forEach(button => {
    button.addEventListener("click", ()=> {
        const id = button.id;
        if (id === "clear") {
            return
        }
        if (!isNaN(id)) {
            handleNumberInput(id);
        }
        else if (id === "+" || id === "-" || id === "*" || id === "/") {
            handleOperator(id);
    }
        else if (id === "=") {
            evaluate();
        }
}
)})

function handleNumberInput(num) {
    if (shouldResetScreen) {
        screen.textContent="";
        shouldResetScreen=false;
    }
    screen.textContent+=num;

}


function handleOperator(op) {
    if (currentOperator != null) {
        evaluate();
    }
    firstOperand = screen.textContent;
    currentOperator=op;
    shouldResetScreen=true;
}

function evaluate() {
    if (currentOperator === null || shouldResetScreen) return;
    secondOperand = screen.textContent;
    const result = operate(firstOperand, secondOperand, currentOperator);

    screen.textContent = result;
    firstOperand=result;
    currentOperator=null;
    shouldResetScreen=true;
}

function operate(a, b, operator) {
    a = Number(a);
    b = Number(b);
    switch(operator) {
        case "+":
            return a+b;
        case "-":
            return a-b;
        case "/":
            return b === 0 ? "Can't divide by 0" : a / b;
        case "*":
            return a*b;
    }
}

