console.log("Hello World!") /*пишет в консоль привет мир*/
alert("Аларм!") /*создают всплывающее окно, 
                которое
                высвечивает надпись аларм, по другому
                уведомление*/

function changeText() {
    document.getElementById('greeting').innerText = 'Hello, JavaScript!';
}