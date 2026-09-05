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
        console.log((isNullOrNan(minMaxVal[0]) || isNullOrNan(minMaxVal[1])))
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
        messageBottom.innerText = messageError;
        return false;
    }

    if (result == input) {
        messageBottom.innerText = "Right!";
        return true;
    } else if (result != input) {
        messageBottom.innerText = "Wrong!";
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

let operationText = document.getElementById('operationText');

let messageBottom = document.getElementById('messageBottom');

let messageTop= document.getElementById('messageTop');

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
    if (!Array.isArray(operation)) {
        console.log(operation);
        messageError = operation;
        messageTop.innerText = messageError;
        console.log('error')
        return false;
    } else {
    console.log('no error');
    let text = operation[0];
    let res = operation[1];
    operationText.textContent = text;
    resultInput.value = '';
    messageTop.innerText = '';
    }  
});

nextButton.addEventListener('click', () => {
    fullOperation = getOperation();
    text = fullOperation[0];
    res = fullOperation[1];
    resultInput.value = '';
    messageTop.innerText = '';
    messageBottom.innerText = '';
    return operationText;
});
