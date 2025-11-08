let task1 = "Задание 1";
console.log(task1);

let age = 32;
console.log(age); /*Выведет возраст 32 в консоле*/

age = 15;
console.log(age); /*Выведет возраст на 15 в консоле*/

// let age = 64 выведет ошибку, так как, переменную let нельзя объявлять два и более раз.

const names = "Иван"; 
console.log(names)/* выведет имя Иван в консоле*/
// name = "Анатолий" будет ошибка, так как в const нельзя присваивать другое значение, только то, которое ты написал в первый раз.
// const name = "Виктор" будет ошибка, так как, переменную const нельзя объявлять два и более раз.
const task2 = "Задание 2";
console.log(task2);
const aboutVar = "Использование var все еще допустимо, особенно в старом коде, но для более надежного и предсказуемого поведения рекомендуется использовать let или const. Также вар использовался до появления ES6";
console.log(aboutVar);

let task3 = "Задание 3";
console.log(task3);

let number = 52;
console.log(number);
console.log(typeof 52);

let string = "Hello Daniil!";
console.log(string);
console.log(typeof "Hello Daniil!");

const isTrue = true;
console.log(isTrue);
console.log(typeof true);

const isNull = null;
console.log(isNull);
console.log(typeof null);

let undefinedValue;
console.log(undefinedValue);
console.log(typeof undefinedValue);

let notANumber = NaN;
console.log(notANumber);
console.log(typeof notANumber);

let task4 = "Задание 4";
console.log(task4)

let nullValue = null;
let undefinedValues = undefined;

console.log(String(nullValue)); // Вывод: "null"
console.log(Number(nullValue)); // Вывод: 0

console.log(String(undefinedValues)); // Вывод: "undefined"
console.log(Number(undefinedValues)); // Вывод: NaN

const task5 = "Задание 5"
console.log(task5)

let numbers = 123;
let strNum = String(numbers); // Использование функции String()
console.log(strNum); // Вывод: "123"

const forDaniel = "Извините, в видеоуроке не было сказано про динамическую типизацию, только про преобазование :(";
console.log(forDaniel);

let task6 = "Задание 6";
console.log(task6);

var sign = prompt("Введите ваше имя и возраст");
console.log(`Привет, ${sign}!`); /*Потом на созвоне объясните эти два этих непонятных моментов prompt и динамическую типизацию пожалуйста 0_0*/