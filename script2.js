document.addEventListener("DOMContentLoaded", function ()
{
    calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", calculateNumbers);
});

function calculateNumbers()
{
    number1 = parseFloat(document.getElementById("number1").value);
    number2 = parseFloat(document.getElementById("number2").value);

    add = (number1 + number2);
    subtract = (number1 - number2);
    multiply = (number1 * number2);
    divide = (number1 / number2);
    modulo = (number1 % number2);
    exponent = (number1 ** number2);
    squareRoot = Math.sqrt(number1);
    squareRoot2 = Math.sqrt(number2);
    power = Math.pow(number1, number2);

    document.getElementById("addResult").textContent = add;
    document.getElementById("subtractResult").textContent = subtract;
    document.getElementById("multiplyResult").textContent = multiply;
    document.getElementById("divideResult").textContent = divide;
    document.getElementById("moduloResult").textContent = modulo;
    document.getElementById("exponentResult").textContent = exponent;
    document.getElementById("squareRootResult").textContent = squareRoot;
    document.getElementById("squareRootResult2").textContent = squareRoot2;
    document.getElementById("powerResult").textContent = power;
}