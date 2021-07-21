//task_4
function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

console.log(addition(5, 6))
console.log(subtraction(5, 6))
console.log(multiplication(5, 6))
console.log(division(5, 6))


//task_5
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return addition(arg1, arg2);
        case '-':
            return subtraction(arg1, arg2);
        case '*':
            return multiplication(arg1, arg2);
        case '/':
            return division(arg1, arg2)
    }
}

console.log(mathOperation(10, 2, "*"))
