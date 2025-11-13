const task1 = "Задание 1";
console.log(task1);

let a = 10;
let b = 5;
const c = 2;

const underTask1 = "Операция сложения";
console.log(underTask1);
console.log(a + b + c);

const underTask2 = "Операция сложения";
console.log(underTask2);
console.log(a + c - b);

const underTask3 = "Операция умножения и деления";
console.log(underTask3);
console.log(a * b / c);

const underTask4 = "Остаток от деления";
console.log(underTask4);
console.log(a % b);

const task2 = "Задание 2";
console.log(task2);

let x = 7;
console.log(x++ + ++x);
x = 7;
console.log(x-- - --x);

const task3 = "Задание 3";
console.log(task3);

const r = 4;
const d = 5;
let string = "The result is:";
let plus = r + d;
console.log(plus);
let newString = String(plus);
console.log(`${string} ${newString}`);

const task4 = "Задание 4";
console.log(task4);

const underTask5 = "Число `a` больше `b`, и оба числа больше 0.";
console.log(underTask5);
console.log((a > b) && a > 0 && b > 0 );

const underTask6 = "Число `c` меньше 10 или равно 2.";
console.log(underTask6);
console.log(c < 10 || c == 2);

const underTask7 = "Результат деления `a` на `c` не равен 5.";
console.log(underTask7);
console.log(a / c != 5);

const task5 = "Задание 5";
console.log(task5);

let num = 10;
let strNum = "10";

const underTask8 = "число 10 == строке 10?";
console.log(underTask8);
console.log(num == strNum);

const underTask9 = "число 10 === строке 10?";
console.log(underTask9);
console.log(num === strNum);

const task6 = "Задание 6";
console.log(task6);

const underTask10 = "Напишите выражение, которое возвращает `true`, если переменная `x` делится на 2 или 3, но не делится на 6.";
console.log(underTask10);
x = 3
let y = 10;
console.log((x % 2 == 0 || x % 3 == 0) && x % 6 != 0);

const underTask11 = "Напишите выражение, которое возвращает `false`, если переменная `y` больше 10 или меньше 5.";
console.log(underTask11);

console.log(y > 10 || y < 5);