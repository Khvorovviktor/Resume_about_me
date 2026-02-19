fetch("https://699489a7fade7a9ec0f5ad3c.mockapi.io/myTest/version1/testMyTestV1")
  .then((response) => response.json()) // Преобразуем ответ в JSON
  .then((data) => {
    console.log(data)
    const employeeTable = document
      .getElementById("employee-table")
      .getElementsByTagName("tbody")[0];
    data.forEach((employee) => {
      const row = document.createElement("tr");
      const userId = document.createElement("td");
      userId.textContent = employee.userId;
      row.appendChild(userId);
      const id = document.createElement("td");
      id.textContent = employee.id;
      row.appendChild(id);
      const title = document.createElement("td");
      title.textContent = employee.title;
      row.appendChild(title);
      const body = document.createElement("td");
      body.textContent = employee.body;
      row.appendChild(body);
      employeeTable.appendChild(row);
    });
  })
  .catch((error) => console.error("Ошибка:", error)); // Обрабатываем ошибку

  const data = { userId: 1, id: 1, title:"he", body: "john_pork is come",};

fetch('https://699489a7fade7a9ec0f5ad3c.mockapi.io/myTest/version1/testMyTestV1', {
 method: 'POST', // Указываем метод
 headers: {
   'Content-Type': 'application/json' // Указываем тип данных
 },
 body: JSON.stringify(data) // Преобразуем объект в JSON-строку
})
 .then(response => response.json())
 .then(data => console.log('Успех:', data))
 .catch(error => console.error('Ошибка:', error));

fetch('https://699489a7fade7a9ec0f5ad3c.mockapi.io/myTest/version1/testMyTestV1/delete/1', {
   method: 'DELETE'
 })
   .then(() => console.log('Пользователь удален'))
   .catch(error => console.error('Ошибка:', error));
