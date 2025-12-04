console.log("Первое задание"); // 1
let numbers = 0;
while (numbers <= 10){
    console.log(numbers)
    numbers++
};

console.log("Второе задание"); // 2
let number = 0;
while (number <= 10) {
    number++;
    if (number === 5) {
        continue
    } else if (number === 8) {
        break;
    }
    console.log(number)
};

console.log("Третье задание"); // 3

num = 0;

do {
    console.log(num)
    num++
} while (num <= 5); // whole do отличается от обычного while тем, что он гарантированно сделает действие отя ы один раз так как условие идёт позже

console.log("Четвёртое задание"); // 4

let input;

while (true) {
    input = parseInt(prompt("ВВедите число 10, если хотите остановить цикл"));
    if (input === 10) {
        break
    };
    console.log("Вы ввели число:" + input);
}

console.log("Пятое задание"); // 5

for (let i =0; i <= 10; i++){
    console.log(i)
};

console.log("Шестое задание"); // 6

let i = 0;

for (;;) {
    if (i > 100) {
        console.log("Цикл остановлен");
        break
    } else {
        i++;
    }
};

console.log("Седьмое задание"); // 7

numbers7 = [1, 2, 3, 4, 5]

for (let i = 0; i < numbers7.length; i++) {
   console.log(numbers7[i]);
};

console.log("Восьмое задание"); // 8
 // цикл for используется, когда кол-во повторений извсетно, когда инициализация, условие и итерация находятся вместе. Например итерирование по массиву:
console.log("Цикл for:");
let array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
   console.log(array[i]);
};

// А цикл while используется, когда кол-во итераций неизвестно заранее, когда условие проверяется перед итерацией. Например ожидание ввода от пользователя: 
console.log("Цикл while:");
let inputs;

while (inputs !== 10) {
   inputs = parseInt(prompt("Введите 10 для завершения"));
   console.log("Вы ввели: " + input);
   if (inputs === 10) {
    break
   }
};

console.log("Девятое задание:"); // 9

for (let j = 10;j > 0;j--){
    console.log(j);
};

console.log("Десятое задание"); // 10
for (let l = 0; l <= 10; l++) {
        if (l % 2 == 1) {
            continue
        } else if (l > 10) {
            break
        }
    console.log(l)
};