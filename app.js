// const prompt = require('prompt-sync')({sigint: true});

// take the operand input
const numb1 = parseFloat(prompt('Enter first number: '));
const op = prompt('Enter operator ( either +, -, * or / ): ');
const numb2 = parseFloat(prompt('Enter second number: '));

let result;

// using if...else if... else
if (op == '+') {
    result = numb1 + numb2;
}
else if (op == '-') {
    result = numb1 - numb2;
}
else if (op == '*') {
    result = numb1 * numb2;
}
else {
    result = numb1 / numb2;
}

// display the result
alert(`${numb1} ${op} ${numb2} = ${result}`);