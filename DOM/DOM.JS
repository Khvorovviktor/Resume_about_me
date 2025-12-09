console.log("Первое задание") // 1
let paragraph = document.getElementById("message");
paragraph.textContent = "Добро пожаловать в JavaScript!";

console.log("Второе задание") // 2
const greenDivs = document.getElementsByClassName("box");
for (let i = 0; i < greenDivs.length; i++) {
   greenDivs[i].style.color = "green";
}

console.log("Третье задание") // 3
const paragraphh = document.querySelector("#text");
paragraphh.textContent = "Изменённый текст";

const allBoxes = document.querySelectorAll(".box")
for (let k = 0; k < allBoxes.length; k++) {
   allBoxes[k].style.color = "red";
}

console.log("Четвёртое задание") // 4
const pHighlight = document.querySelectorAll(".highlight");
for (let j = 0; j < pHighlight.length; j++) {
   pHighlight[j].style.color = "red";
}