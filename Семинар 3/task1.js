//2023/07/27
// Задача 1: Получить от пользователя два числа и вывести в диалоговое окно сумму значений,
// которые ввел пользователь, вывод должен выглядеть так (пример): 
// Результат сложения чисел 5 и 2 равен 7.

// let num1 = Number.parseInt(prompt("Введите целое число 1"));
// let num2 = Number.parseInt(prompt("Введите целое  число 2"));

//alert(`Сумма этих чисел будет: ${num1} + ${num2} = ${num1 + num2}`);

let float1 = Number.parseFloat(prompt("Введите дробное число 1"));
let float2 = Number.parseFloat(prompt("Введите дробное число 2"));

alert(`Сумма этих чисел будет: ${float1} + ${float2} = ${getSumm(float1, float2)},
округленно: ${getSumm(float1, float2).toFixed(2)}`);

function getSumm(flt1, flt2){
    return flt1+flt2;
}
