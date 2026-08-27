function generateValue(max) {
    return Math.floor(Math.random() * max + 1)
};

function generateOperator() {
    let bit = Math.round(Math.random());
    const operator = bit < 0.5 ? '-' : '+';
    return operator;
}

function randomValues() {
    let val1 = generateValue(20);
    let val2 = generateValue(20);
    return [val1, val2];
}


const numbers = randomValues();
const operator = generateOperator();

const first = numbers[0];
const second = numbers[1];

const fullText = first + " " + operator + " " + second ;

document.getElementById('text').textContent = fullText;
document.getElementById('refreshButton').addEventListener('click', function() {
    window.location.reload();
});

