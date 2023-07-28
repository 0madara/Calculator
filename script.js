let screen = document.getElementById("screen");
let expression = "";

function appendToScreen(value) {
    expression += value;
    screen.textContent = expression;
}

function clearScreen() {
    expression = "";
    screen.textContent = expression;
}

function calculate() {
    try {
        const result = eval(expression);
        screen.textContent = result;
        expression = result.toString();
    } catch (error) {
        screen.textContent = "Error";
        expression = "";
    }
}
