console.log("Второе задание"); // 2
const btn = document.querySelector("#jsButton");
btn.addEventListener('click', () => {
    console.log("Событие обработано через JS");
});

console.log("Третье задание"); // 3
const myDiv = document.querySelector("#myDiv");
// 1 условие
myDiv.addEventListener('mouseover', () => {
   myDiv.style.backgroundColor = 'blue';
});

myDiv.addEventListener('mouseout', () => {
   myDiv.style.backgroundColor = 'white';
});
// 2 условие

myDiv.addEventListener('click', () => {
   console.log("Элемент нажат");
});

console.log("Четвёртое задание"); // 4
const input = document.querySelector("#textInput");
input.addEventListener("keydown", (event) => {
    console.log("Значение инпута:", event.target.value)
});

console.log("Пятое задание"); // 5
const link = document.querySelector("#myLink");
link.addEventListener("click", (event) => {
    event.preventDefault()
    console.log("Переход по ссылке отменён");
})

console.log("Шестое задание"); // 6
const ul = document.querySelector("#list");
ul.addEventListener('click', (event) => {
    if (event.target.tagName === "LI") {
        console.log(event.target.textContent)
    };
})

console.log("Седьмое задание") // 7
const inp = document.querySelector("#keyboardInput")
inp.addEventListener('keydown', (event) => {
    console.log("Клавиша нажата:", event.code)
})