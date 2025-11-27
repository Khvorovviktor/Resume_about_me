console.log("Первое задание"); // 1

let person = {
    name: prompt("Введите ваше имя:"),
    age: parseInt(prompt("Введите ваш возраст:")),
    city: prompt("Введите ваш город:")
}

console.log(person);

console.log("Второе задание"); // 2
console.log(person.age, person.name);
let newCity = prompt("Смените ваш город на другой:");
person.city = newCity;
console.log(person);

console.log("Третье задание"); // 3

person.greet = function () {
    return(`Привет, меня зовут ${this.name}, мне ${this.age} лет!`)
}    
console.log(person.greet());

console.log("Четвёртое задание"); // 4

let obj1 = { a: 10, b: 20 };
let obj2 = { a: 10, b: 20 };
console.log(obj1 == obj2); //false потому что внутри разных объектов разные ссылки на элементы
console.log(obj1 === obj2); //false потому что внутри разных объектов разные ссылки на элементы

console.log("Пятое задание"); // 5

const book = {
    title: "Станционный смотритель",
    author: "Александр Сергеевич Пушкин",
    details: {
        year: 1831,
        pages: 24,
    }
}

let copyOfBook = Object.assign({}, book);
book.year = 1830;
console.log(book);
console.log(copyOfBook); // изменения повлияли на копию, потому что метод object.assign() копирует объект и его элементы, и элементы имеют одну ссылку

console.log("Шестое задание"); // 6

number = parseInt(prompt("Введите первое число:"));
number2 =  parseInt(prompt("Введите второе число:"));

let calculator = {
    a: number,
    b: number2,
}
 
calculator.sum = function (a,b) {
    return(a + b);
}
calculator.multiply = function (a,b) {
    return(a*b)
}

console.log(calculator.sum(number, number2));
console.log(calculator.multiply(number, number2));

console.log("Седьмое задание"); // 7

const car = {
    brand: "BMW",
    model: "BMW M6M Competition",
}
console.log(car);
car.brand = "Mercedes"; // не выведет ошибку, т.к. переменная const гарантирует, что только удаление или добавление содержимого не может быть выполнена, а изменение может.
console.log(car);