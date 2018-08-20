

function add(number1, number2) {
    let sum = parseInt(number1) + parseInt(number2);
	document.getElementById("calcAdd") = sum;
}

function subtract(number1, number2) {
    return(number1 - number2);
}

function multiply(number1, number2) {
    return(number1 * number2);
}

function divide(number1, number2) {
    return(number1 / number2);
}

document.getElementById("calcAdd") = add(2, 4);
document.getElementById("calcSubtract") = subtract(2, 4);
document.getElementById("calcMultiply") = multiply(2, 4);
document.getElementById("calcDivide") = divide(2, 4);
/* function testCalc() {
	console.log(add(10, 2));
    console.log(subtract(8, 5));
    console.log(multiply(4, 4));
    console.log(divide(8, 4));

}*\