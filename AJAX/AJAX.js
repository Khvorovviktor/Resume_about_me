// const xhr = new XMLHttpRequest();
// xhr.open('GET', "https://jsonplaceholder.typicode.com/users", true);
// xhr.onload = function() {
//     if (xhr.status === 200){
//         const users = JSON.parse(xhr.responseText);
//         renderUserTable(users);
//     } else {
//         console.error("Ошибка загрузки:", xhr.status);
//     }
// };
// xhr.onerror = function() {
//     console.error("Ошибка соединения");
// };
// xhr.send();

// function renderUserTable(users) {
//     const userTable = document.getElementById("userTable")
//     users.forEach(user => {
//         const userColumn = document.createElement("td");
//         const tableHeader = document.createElement("th");
//         tableHeader.textContent = `${user.name}`;
//         userColumn.appendChild(tableHeader);
//         const tableRow = document.createElement("tr");
//         tableRow.textContent = `${user.email}`;
//         userColumn.appendChild(tableRow);
//         userTable.appendChild(userColumn);
//     });
// }

// 2 задание
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
xhr.onload = function () {
  if (xhr.status === 200) {
    const posts = JSON.parse(xhr.responseText);
    console.log(posts);
  } else {
    console.error("Ошибка загрузки:", xhr.status);
  }
};
xhr.onerror = function () {
  console.error("Ошибка соединения");
};
xhr.send();

// 3 задание и 4 задание

const xhrr = new XMLHttpRequest();
xhrr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhrr.onload = function () {
  if (xhrr.status === 200) {
    const posts = JSON.parse(xhrr.responseText);
    renderPostsUl(posts);
  } else {
    console.error("Ошибка загрузки:", xhrr.status);
  }
};
xhrr.onerror = function () {
  console.error("Ошибка соединения");
};
xhrr.send();

// function renderPostsUl(posts) {
//   const titleList = document.getElementById("titleList");
//   posts.forEach((title) => {
//     const listItem = document.createElement("li");
//     listItem.textContent = `${title.title} ${title.body} ${title.id}`;
//     titleList.appendChild(listItem);
//   });
// }

function renderPostsUl(posts) {
  const userTable = document.getElementById("titleList");
  posts.forEach((title) => {
    const tableColumn = document.createElement("table");
    const tableHeader = document.createElement("th");
    tableHeader.textContent = `${title.title}`;
    tableColumn.appendChild(tableHeader);
    const tableRow = document.createElement("tr");
    tableRow.textContent = `${title.body}`;
    const tableId = document.createElement("tr");
    tableId.textContent = `${title.id}`;
    tableColumn.appendChild(tableRow);
    tableColumn.appendChild(tableId);
    userTable.appendChild(tableColumn);
  });
}

// 5 задание

const xhrs = new XMLHttpRequest();
xhrs.open('GET', 'htts:/jsonplaceholder.typicode.com/users', true);
xhrs.onload = function() {
 if (xhrs.status === 200) {
   const users = JSON.parse(xhrs.responseText);
   renderUserList(users); // Вызов функции для рендеринга списка
 } else {
   console.error('Ошибка загрузки данных:', xhrs.status);
   console.error("Сервер не отвечает:", xhrs.status);
 }
};
xhrs.onerror = function() {
 console.error('Ошибка соединения');
};
xhrs.send();

function renderUserList(users) {
   const userListq = document.getElementById('userListss');
   users.forEach(user => {
     const listItemq = document.createElement('li');
     listItemq.textContent = `${user.name} (${user.email})`;
     userListq.appendChild(listItemq);
   });
 } 

//6

const xhrrs = new XMLHttpRequest();
xhrrs.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhrrs.onload = function () {
  if (xhrrs.status === 200) {
    const posts = JSON.parse(xhrrs.responseText);
    renderPostsUl(posts);
  } else {
    console.error("Ошибка загрузки:", xhrrs.status);
  }
};
xhrrs.onerror = function () {
  console.error("Ошибка соединения");
};
xhrrs.send();

function renderPostsUl(posts) {
  const loadingById = document.getElementById("Loading")
  loadingById.style.display = "none"
  const userTable = document.getElementById("newUl");
  posts.forEach((title) => {
    const tableColumn = document.createElement("table");
    const tableHeader = document.createElement("th");
    tableHeader.textContent = `${title.title}`;
    tableColumn.appendChild(tableHeader);
    const tableRow = document.createElement("tr");
    tableRow.textContent = `${title.body}`;
    const tableId = document.createElement("tr");
    tableId.textContent = `${title.id}`;
    tableColumn.appendChild(tableRow);
    tableColumn.appendChild(tableId);
    userTable.appendChild(tableColumn);
  });
}