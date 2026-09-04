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
    messageError = '';
    let minMaxVal = [minVal = firstInput.value, maxVal = secondInput.value];
    if ((isNullOrNan(minMaxVal[0]) || isNullOrNan(minMaxVal[1]))) {
        return messageError = (isNullOrNan(minMaxVal[0]) || isNullOrNan(minMaxVal[1]));
    } else {
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
    return fullOperation;}
};

function isRight(operationArray, input) {
    let result = operationArray[1];
    if (isNullOrNan(input)) {
        messageError = isNullOrNan(input);
        messageInfo.innerText = messageError;
        return false;
    }

    if (result == input) {
        messageInfo.innerText = "Right!";
        return true;
    } else if (result != input) {
        messageInfo.innerText = "Wrong!";
        return false;
    } 
};

function isNullOrNan(value) {
    messageError ='';
    if (value === '') {
        return messageError = "Don't leave empty spaces!";
    } else if (isNaN(value)) {
        return messageError = "Only type numbers!";
    }
};

let operation;
let operator;
let messageError;

const firstInput = document.getElementById('inputOne');

const secondInput = document.getElementById('inputTwo');

const resultInput = document.getElementById('resultInput');

const buttonGenerate = document.getElementById('generateButton');

const nextButton = document.getElementById('nextButton');

let messageInfo = document.getElementById('message');

const checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', () => {
    let userInput = resultInput.value;
    if (!isRight(operation, userInput)) {
        return false;
    } else {
        return true;
    }
});

buttonGenerate.addEventListener('click', () => {
    messageError = '';
    operation = getOperation();
    if (!isNullOrNan(operation)) {
        messageError = isNullOrNan(operation);
        messageInfo.innerText = messageError;
        return false;
    } else {
    text = operation[0];
    res = operation[1];
    let operationText = document.getElementById('operationText').textContent = text;
    resultInput.value = '';
    messageInfo.innerText = '';
    return operationText;
    }  
});

nextButton.addEventListener('click', () => {
    fullOperation = getOperation();
    text = fullOperation[0];
    res = fullOperation[1];
    let operationText = document.getElementById('operationText').textContent = text;
    resultInput.value = '';
    messageInfo.innerText = '';
    return operationText;
});
