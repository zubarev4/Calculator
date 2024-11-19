let screen = document.getElementById("result");
let expression = "";

function display(value) {
    expression += value;
    screen.value = expression;
}

function clearScreen() {
    expression = "";
    screen.value = "";
}

function del() {
    expression = expression.slice(0, -1);
    screen.value = expression;
}

function calculate() {
    try {
        if (expression === "") {
            screen.value = "Error";
            return;
        }
        
        let result = eval(expression);
        
        if (result === Infinity || result === -Infinity) {
            screen.value = "Cannot divide by zero!";
        } else {
            screen.value = result;
        }
        expression = "";
    } catch (error) {
        screen.value = "Error";  
        expression = "";
    }
}

function square() {
    try {
        let value = parseFloat(screen.value);
        screen.value = value * value;
        expression = "";
    } catch (error) {
        screen.value = "Error";
        expression = "";
    }
}

function sqrt() {
    try {
        let value = parseFloat(screen.value);
        screen.value = Math.sqrt(value);
        expression = "";
    } catch (error) {
        screen.value = "Error";
        expression = "";
    }
}

function toggleNegate() {
    let value = parseFloat(screen.value);
    if (!isNaN(value)) { //jeigu skaicius 
        value = value * -1; 
        screen.value = value;
        expression = value.toString(); 
    }
}

function power() {
    let base = parseFloat(screen.value);
    let exponent = prompt("Enter the exponent:");
    screen.value = Math.pow(base, exponent);
    expression = "";
}



function logarithm() {
    let value = parseFloat(screen.value);
    screen.value = Math.log10(value);
    expression = "";
}

function factorial() {
    let value = parseInt(screen.value);
    if (value < 0) {
        screen.value = "Error";
        expression = "";
        return;
    }
    let result = 1;
    for (let i = 1; i <= value; i++) {
        result *= i;
    }
    screen.value = result;
    expression = "";
}
