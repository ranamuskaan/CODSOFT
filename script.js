function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
    try {
        const display = document.getElementById('display');
        display.value = eval(display.value);
    } catch (e) {
        alert('Invalid expression');
    }
}
