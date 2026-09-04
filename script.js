function getNumbers(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    return(randomNum);
};

function getOperator() {
    let rand = Math.round(Math.random());
    if (rand == 1) {
        operator = '+';
    } else {
            operator = '-'
        }
        return operator;
}

function getOperation() {
    let minMaxVal = [minVal = firstInput.value, maxVal = secondInput.value];
    const val1 = getNumbers(minVal, maxVal);
    const val2 = getNumbers(minVal, maxVal);
    operator = getOperator();
    const text = val1 + " " + operator + " " + val2;
    let res = 0;
    if (operator == "-") {
        res = val1 - val2;
    } else {
        res = val1 + val2;
    }
    let fullOperation = [text, res];
    return fullOperation;
};

function isRight(operationArray, input) {
    result = operationArray[1];
    if (result == input) {
        console.log("right!");
    } else if (input === '') {
        console.log("Please type smth");
    } else {
        console.log("wrong!");
    }
};

function isNullOrNan(value) {
    if (value === '') {
        console.log('empty');
        return isEmpty = true;
    } else if (value === NaN) {
        console.log('not a num');
        return isNan = true;
    } else if (value == 'number') {
        return value;
    }
};


const firstInput = document.getElementById('inputOne');

const secondInput = document.getElementById('inputTwo');

const resultInput = document.getElementById('resultInput');

const buttonsRefresh = document.querySelectorAll('.buttonsRefresh');

const checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', () => {
    let userInput = resultInput.value;
    isRight(fullOperation, userInput);
});

buttonsRefresh.forEach(b => {
    b.addEventListener('click', () => {
    fullOperation = getOperation();
    text = fullOperation[0];
    res = fullOperation[1];
    let operationText = document.getElementById('operationText').textContent = text;
    resultInput.value = '';
    return operationText;
})
});





