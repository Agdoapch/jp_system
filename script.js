const generateValue = (max) => { return Math.floor(Math.random() * max ) + 1 };

function generateOperator() {
    let bit = Math.round(Math.random());
    let operator = bit < 0.5 ? '-' : '+';
    return operator;
}

function generateValues() {
    return [generateValue(20), generateValue(20)];
}

function getOperation () {
    const numbers = generateValues();
    const operator = generateOperator();
    const first = numbers[0];
    const second = numbers[1];
    return `${first} ${operator} ${second}`;
}

const operationText = getOperation();

document.getElementById('text').textContent = operationText;
document.getElementById('nextButton').addEventListener('click', function() {
    const operation = getOperation();
    document.getElementById('text').textContent = operation;
});

