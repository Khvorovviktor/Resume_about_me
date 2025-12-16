console.log("Первое задание"); // 1
localStorage.setItem("greeting", "Привет, мир!");
console.log(localStorage.getItem("greeting"));

console.log("Второе задание"); // 2
localStorage.removeItem("greeting");
console.log(localStorage.getItem("greeting"));

console.log("Третье задание"); // 3
let person = {
    name: "Марат",
    age: 26,
    themes: "чёрная",
}
const personJSON = JSON.stringify(person);
localStorage.setItem('person', personJSON);
const storedPersonJSON = localStorage.getItem("person")
const personParse = JSON.parse(storedPersonJSON);
console.log(personParse);

console.log("Четвёртое задание"); // 4
let getedUser = localStorage.getItem('person');
let user = JSON.parse(getedUser);
user.country = "Казахстан";
const stringUser = JSON.stringify(user);
localStorage.setItem('person', stringUser);

console.log("Пятое задание"); // 5
let isNull = localStorage.getItem("user");
    if (!isNull){
        user = {
            name: "Марат",
            age: 26,
            themes: "чёрная",
        }
        const userJSON = JSON.stringify(user);
        localStorage.setItem('user', userJSON);
        
    } else {
        console.log(JSON.parse(isNull));
    }

console.log("Шестое задание"); 
localStorage.clear();
let isNull2 = localStorage.getItem("user");
console.log(JSON.parse(isNull2));

console.log("Седьмое задание");
let tasks = [
    {
        title: 1,
        completed: true,
    },
    {
        title: 2,
        completed: true,
    },
    {
        title: 3,
        completed: false,
    }
]

let tasksJSON = JSON.stringify(tasks);
localStorage.setItem('tasks', tasksJSON);
let getedTasks = localStorage.getItem("tasks");
console.log(JSON.parse(getedTasks));

console.log("Восьмое задание");
getedTasks = localStorage.getItem("tasks");
let parsesTasks = JSON.parse(getedTasks)
parsesTasks[2].completed = true;

tasksJSON = JSON.stringify(parsesTasks);
localStorage.setItem('tasks', tasksJSON);
getedTasks = localStorage.getItem("tasks");
console.log(JSON.parse(getedTasks));