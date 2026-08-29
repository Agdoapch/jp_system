const generateValue = (max) => { return Math.floor(Math.random() * max + 1) };

function generateOperator() {
    let bit = Math.round(Math.random());
    let operator = bit < 0.5 ? '-' : '+';
    return operator;
}

function generateValues() {
    let val1 = generateValue(20);
    let val2 = generateValue(20);
    return [val1, val2];
}

function getOperation () {
    let numbers = generateValues();
    let operator = generateOperator();
    let first = numbers[0];
    let second = numbers[1];
    let fullText = first + " " + operator + " " + second ;
    return fullText;
}

fullText = getOperation();

document.getElementById('text').textContent = fullText;
document.getElementById('nextButton').addEventListener('click', function() {
    fullText = getOperation();
    document.getElementById('text').textContent = fullText;
    return fullText;
});

