let num = prompt('Сколько вы хотите положить в банк?');
let numLength = num.length;
lastNum = num.charAt(numLength - 1);

switch (lastNum) {
    case '0':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
        alert(`Ваша сумма в ${num} рублей успешно зачислена.`);
        break;
    case '1':
        alert(`Ваша сумма в ${num} рубль успешно зачислена.`);
        break;
    case '2':
    case '3':
    case '4':
        alert(`Ваша сумма в ${num} рубля успешно зачислена.`);
        break;
}
