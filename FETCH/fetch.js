// 1

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => console.log(posts))
  .catch((error) => console.error("Ошибка:", error));

// 2

const data = { id: "40", title: "xD", body: "ku-ku :)" };

fetch(
  "https://699489a7fade7a9ec0f5ad3c.mockapi.io/myTest/version1/testMyTestV1",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  },
)
  .then((response) => response.json())
  .then((data) => console.log("Успешное создание поста:", data))
  .catch((error) => console.log("Ошибка:", error));

// 3

fetch(
  "https://69949a7fade7a9ec0f5ad3c.mockapi.io/myTest/version1/testMyTestV111",
)
  .then((response) => response.json())
  .then((title) => console.log(title))
  .catch((error) => console.log("Ошибка:", error));

// 4
// put
const updatedData = { id: "4", title: "ss", body: "Hello, world!" };

fetch("https://jsonplaceholder.typicode.com/posts/4", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updatedData),
})
  .then((response) => response.json())
  .then((updatedData) => console.log("обновлено:", updatedData))
  .catch((error) => console.log("Ошибка:", error));
// delete

fetch(
  "https://699489a7fade7a9ec0f5ad3c.mockapi.io/myTest/version1/testMyTestV1/4",
  {
    method: "DELETE",
  },
)
  .then(() => console.log("Пользователь с ID 4 успешно удален"))
  .catch((error) => console.log("Ошибка:", error));

// 5

async function postWithAsync() {
  try {
    const resolve = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!resolve.ok) {
      throw new error("Ошибочка вышла:");
    }
    const newNews = await resolve.json();
    console.log(newNews);
  } catch (error) {
    console.log("Ошибка:", error);
  }
}

postWithAsync();

// 6

fetch("https://jsonplaceholder.typicode.com/posts/4", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer 1234567890987654321",
    "User-Agent": "Mozilla/5.0 (Linux; Android 16; Pixel 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.12.45 Mobile Safari/537.36",
    "Accept": "application/json",
  },
  body: JSON.stringify()
})
  .then((response) => response.json())
  .then((data) => console.log("chto-to ", data))
  .catch((error) => console.log("Ошибка:", error));

// fetch("https://699489a7fade7a9ec0f5ad3c.mockapi.io/myTest/version1/testMyTestV1")
//   .then((response) => response.json()) // Преобразуем ответ в JSON
//   .then((data) => {
//     console.log(data)
//     const employeeTable = document
//       .getElementById("employee-table")
//       .getElementsByTagName("tbody")[0];
//     data.forEach((employee) => {
//       const row = document.createElement("tr");
//       const userId = document.createElement("td");
//       userId.textContent = employee.userId;
//       row.appendChild(userId);
//       const id = document.createElement("td");
//       id.textContent = employee.id;
//       row.appendChild(id);
//       const title = document.createElement("td");
//       title.textContent = employee.title;
//       row.appendChild(title);
//       const body = document.createElement("td");
//       body.textContent = employee.body;
//       row.appendChild(body);
//       employeeTable.appendChild(row);
//     });
//   })
//   .catch((error) => console.error("Ошибка:", error)); // Обрабатываем ошибку

//   const data = { userId: 1, id: 1, title:"he", body: "john_pork is come",};

// fetch('https://699489a7fade7a9ec0f5ad3c.mockapi.io/myTest/version1/testMyTestV1', {
//  method: 'POST', // Указываем метод
//  headers: {
//    'Content-Type': 'application/json' // Указываем тип данных
//  },
//  body: JSON.stringify(data) // Преобразуем объект в JSON-строку
// })
//  .then(response => response.json())
//  .then(data => console.log('Успех:', data))
//  .catch(error => console.error('Ошибка:', error));

// const updatedData = { userId: 2, title: "Hello!", body: "lorem ipsum..." };

// fetch('https://699489a7fade7a9ec0f5ad3c.mockapi.io/myTest/version1/testMyTestV1/13', {
//  method: 'PUT',
//  headers: {
//    'Content-Type': 'application/json'
//  },
//  body: JSON.stringify(updatedData)
// })
//  .then(response => response.json())
//  .then(data => console.log('Обновлено:', updatedData))
//  .catch(error => console.error('Ошибка:', error));
