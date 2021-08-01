'use strict'

function NumToObj(num) {
    let result = {units: null, tens: null, hundreds: null};

    if (num < 0 || num > 999 || typeof(num) == 'string' || Number.isInteger(num) == false) {
        return console.log('Было передано вне [0, 999] диапазона, не целое число или вообще не число. ', result)
    }

    let numbers = [];

    for (let i = 0; i < 3; i++) {   
        numbers.push(num % 10);
        num = Math.floor(num / 10);
    }

    result.units = numbers[0];
    result.tens = numbers[1];
    result.hundreds = numbers[2];

    return console.log(result);
}

NumToObj('строка');
NumToObj(12.5);
NumToObj(-9);
NumToObj(1234);
NumToObj(8);
NumToObj(45);
NumToObj(954);
