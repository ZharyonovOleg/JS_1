"use strict";

// 1 задание:

//пример 1
let a = 1, b = 1, c, d;
c = ++a;
alert("Задание 1 пример 1 ответ: " + c + " = возвращает в с значение а после добавления единицы");

// пример 2
d = b++;
alert("Задание 1 пример 2 ответ: " + d + " = возвращает в d значение b до добавления единицы"); //

// пример 3
c = 2 + ++a;
alert("Задание 1 пример 3 ответ: " + c + " = 2 прибавить а + 1 + прибавленное ранее к а 1");

// пример 4
d = 2 + b++;
alert("Задание 1 пример 4 ответ: " + d + " = 2 прибавить первоначальое b (равное 1) плюс прибавленное ранее к b 1");

alert("Задание 1 пример 5 ответ: " + a + " по ходу выполнения к а равной единице два раза прибавлено по 1");
alert("Задание 1 пример 6: " + b + " по ходу выполнения к b равной единице два раза прибавлено по 1");


// 2 задание:

a = 2; // а присваивается 2
let x = 1 + (a *= 2);
alert("Задание 2: " + x + " так как а присваевает себе умножение себя на два плюс 1 = 5");


// 3 задание:

a = 5;
b = -7; // опущено let, чтобы не было ошибки в рамках одного файла

if (a >= 0 && b >= 0) {
    alert("Задание 3 ответ: " + (a - b));
} else if (a < 0 && b < 0) {
    alert("Задание 3 ответ: " + (a * b));
} else if ((a * b) < 0) {
    alert ("Задание 3 ответ: " + (a + b))
}


// 4 задание:

let y = 9 // x уже есть

function plus(x, y) {
    return x + y
}

function minus(x, y) {
    return x - y
}

function star(x, y) { // star :-))
    return x * y
}

function divide(x, y) {
    return x / y
}


// 5 задание:

