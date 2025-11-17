let task1 = "Первое задание";
console.log(task1);
let num = prompt("Введите любое число");
if (num > 10) {
    console.log("Число больше 10")
} else {
    console.log("Число меньше или равно 10")
};

let task2 = "Задание 2";
console.log(task2);

let fileConfirm = confirm("Вы хотите удалить данный файл?");
if (fileConfirm) {
    console.log("Файл удалён.")
} else {
    console.log("Удаление отменено.")
};

let task3 = "Третье задание";
console.log(task3);

let age = prompt("Каков ваш возраст?");

if (age < 18) {
    console.log("Вы ещё подросток.");
} else if (age >= 18, age <= 30) {
    console.log("Вы молодой взрослый.");
} else if (age > 30) {
    console.log("Вы взрослый.");
}
let task4 = "Задание четвёртое";
console.log(task4);

let number = prompt("Введите число:");
let noEvOrEv = (number % 2 == 0) ? "Четное число." : "Нечётное число."
console.log(noEvOrEv)

let task5 = "Задание пятое";
console.log(task5);

let dayOfSeven = prompt("Введите цифру от 1 до 7");
let message;
switch (dayOfSeven) {
   case "1":
        message = "1 - Это понедельник";
       break;
   case "2":
       message = "2 - это вторник";
       break;
   case "3":
       message = "3 - это среда";
       break;  
   case "4":
       message = "4 - это четверг";
       break;
   case "5":
       message = "5 - это пятница";
       break;   
   case "6":
       message = "6 - это суббота";
       break; 
   case "7":
       message = "7 - это воскресенье";
       break;
    default :
        message = "Некорректное значение";                     
};
console.log(message);

let task6 = "Задание шестое";
console.log(task6);

let num1 = prompt("Введите первое число:")
let num2 = prompt("Введите второе число:")

if (num1 == num2) {
    console.log("Числа равны.");
};

let numbers = (num1 > num2) ? "Первое число больше второго." : "Второе число больше первого.";
console.log(numbers);

let additionallytask = "Дополнительное задание";
console.log(additionallytask);

let dayOfTwelve = prompt("Введите цифру от 1 до 7");
let messages;
switch (dayOfTwelve) {
   case "1":
        messages = "1 - Это месяц январь";
       break;
   case "2":
       messages = "2 - это месяц февраль.";
       break;
   case "3":
       messages = "3 - это месяц март.";
       break;  
   case "4":
       messages = "4 - это месяц апрель.";
       break;
   case "5":
       messages = "5 - это месяц май.";
       break;   
   case "6":
       messages = "6 - это месяц июнь.";
       break; 
   case "7":
       messages = "7 - это месяц июль.";
       break;
   case "8":
        messages = "8 - это месяц август.";
        break;
   case "9":
        messages = "9 - это месяц сентябрь.";
        break;
    case "10":
        messages = "10 - это месяц октябрь.";
        break;
    case "11":
        messages = "11 - это месяц ноябрь.";
        break;
    case "12":
        messages = "12 - это месяц декабрь.";
        break;                                   
    default :
        messages = "Некорректное значение";                     
};
console.log(messages)