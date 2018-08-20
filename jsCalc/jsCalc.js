

function add(number1, number2) {
    return(number1 + number2);
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

document.getElementById("calcAdd").innerHTML = add(2, 4);
document.getElementById("calcSubtract").innerHTML = subtract(2, 4);
document.getElementById("calcMultiply").innerHTML = multiply(2, 4);
document.getElementById("calcDivide").innerHTML = divide(2, 4);
/* function testCalc() {
	console.log(add(10, 2));
    console.log(subtract(8, 5));
    console.log(multiply(4, 4));
    console.log(divide(8, 4));

} *\