"use strict";

let Tc = prompt("Введите температуру в градусах Цельсия:");
let Tf = (9 / 5) * Tc + 32;
alert(Tc + ' градусов Цельсия равно ' + Tf + ' градусам по Фаренгейту!');

let name = "Василий";
let admin = name;
console.log(admin);

/*
1. 10 + 10 + '10' получаем 2010: 10 + 10 = 20, а потом 20 + "10" сливаются как строки
 */
let result1 = 10 + 10 + '10';
console.log(result1);

/*
2. 10 + '10' + 10 получаем 101010: 10 + '10' = 1010 слияние в строчном формате, а потом 1010 + "10" = 101010 тоже слияние в строчном формате
 */
let result2 = 10 + '10' + 10;
console.log(result2);

/*
3. Видимо +'цифра в текстовом формате' переводится в положительное число, если это возможно
 */
let result3 = 10 + +'10';
console.log(result3);

/*
4. видимо "" означает бесконечность поэтому 10 разделить на минус бесконечность равно минус бесконечность
 */
let result4 = 10 / -'';
console.log(result4);

/*
5. +"2,5" программа не может перевести в число, так как запятая не используется в числах, поэтому ответ Not a Number
 */
let result5 = 10 / +'2,5';
console.log(result5);