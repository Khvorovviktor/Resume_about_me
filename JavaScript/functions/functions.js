const task1 = "Первое задание";
console.log(task1);

function greet() {
    console.log("Привет, мир!")
};
greet();

let task2 = "Второе задание";
console.log(task2);

let name = prompt("What's your name?");

function sayHallo(name) {
    console.log("Hello," + name + "!");
};

if (name == "") {
    name =  "Guest";
};;

sayHallo(name);

const task3 = "Третье задание";
console.log(task3);

let num1 = parseInt(prompt("Введите первое число:"));
let num2 = parseInt(prompt("Введите второе число:"));

function sum(a, b) {
    return(a+b);
};

console.log(sum(num1, num2));

let task4 = "Четвёртое задание";
console.log(task4);

function isEven(nums) {
    nums = parseInt(prompt("Введите число:"));
    if (nums % 2 == 0) {
        console.log("true");
    } else {
        console.log("false");
    }
};

isEven()

const task5 = "Пятое задание";
console.log(task5);

num3 = parseInt(prompt("Введите первое число:"));
num4 = parseInt(prompt("Введите второе число:"));
function max(a, b) {
    if (a > b) {
        return(a);
    } else if (a == b) {
        return("Числа равны.");
    } else {
        return(b);
    };
}

console.log(max(num3, num4));

let task6 = "Шестое задание";
console.log(task6);

name1 = prompt("Введите ваше имя:");
name2 = prompt("Введите вашу фамилию:");

function getInitials(n,f) {
    return(`${n[0]}. ${f[0]}.`)
};

console.log(getInitials(name1, name2));

const task7 = "Седьмое задание";
console.log(task7);

numInSquare = prompt("Введите число:");
numInCube = prompt("Введите число:");

function square(numm) {
    return(numm**2);
};

function cube(numm) {
    return(numm*square(numm));
};

console.log(square(numInSquare));
console.log(cube(numInCube));

let task8 = "Восьмое задание";
console.log(task8);

sum2 = (a2,b2) => a2 + b2;

let num5 = parseInt(prompt("Введите первое число:"));
let num6 = parseInt(prompt("Введите второе число:"));

console.log(sum2(num5, num6));

const addTask = "Дополнительное задание";
console.log(addTask);

 let factorial = parseInt(prompt("Введите число:"));

function getFactorial(ab) {
        if (ab == 0 || ab == 1) {
            return(1);
        }
        return(ab * getFactorial(ab - 1));
}

console.log(getFactorial(factorial));