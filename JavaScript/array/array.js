console.log("Первое задание");// 1
let fruits = ["Яблоко", "Банан", "Апельсин"];
console.log(fruits);

console.log("Второе задание");// 2
fruits.push("Груша");
console.log(fruits);
console.log(fruits[0], fruits[3]);

console.log("Третье задание");// 3
let removeElement = fruits.pop();
let removedElement = fruits.shift();
console.log(fruits);

console.log("Четвёртое задание"); // 4
fruits.forEach((element) => console.log(element));

console.log("Пятое задание"); // 5
let leng = fruits.map(el => el.length);
console.log(leng);

console.log("Шестое задание"); // 5
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

console.log("Седьмое задание"); // 7
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Вывод: 10

console.log("Восьмое задание"); // 8
let finded = numbers.find(num => num > 5);
console.log(finded);

console.log("Девятое задание"); // 9 
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);
console.log(arr3);

console.log("Десятое задание"); // 10
let hasBanana = fruits.includes("Банан");
console.log(hasBanana);

console.log("Одиннадцатое задание"); //11
let reversedFruits = fruits.reverse();
console.log(reversedFruits);