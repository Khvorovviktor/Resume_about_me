// 1
setTimeout(() => {
  console.log("Привет, мир!");
}, 2000);
// 2
// setInterval(() => {
//     var time = new Date()
//     console.log(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`);
// }, 1000)
// 3
const everySec = setInterval(() => {
  var time = new Date();
  console.log(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`);
}, 1000);

setTimeout(() => {
  clearInterval(everySec);
}, 5000);
// 4

// const fetchData = new Promise((resolve) => {
//   var success = true;
//   if (success) {
//     resolve("Данные получены!");
//   }
// });
// setTimeout(() => {
//   fetchData.then((result) => console.log(result));
// }, 3000);

async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Данные получены.");
    }, 3000);
  });
}
fetchData().then((result) => console.log(result));

//5

// const fetchDataWithError = new Promise((resolve, reject) => {
//   var success = false;
//   if (success) {
//     resolve("Данные получены!");
//   } else {
//     reject("Ошибка загрузки!");
//   }
// });
// setTimeout(() => {
//   fetchDataWithError.catch((result) => console.log(result));
// }, 2000);

async function fetchDataWithError() {
  return new Promise((resolve, reject) => {
    reject("Ошибка загрузки!");
  }, 2000);
}
fetchDataWithError().catch((result) => console.log(result))
//6
async function fetchDataAsync() {
  try {
    const resolve = await fetchData;
    console.log(resolve);
  } catch (error) {
    console.log("Ошибка fetchdata:", error);
  }
}

fetchDataAsync();

// 7

async function fetchDataWithErrorAsync() {
  try {
    const resolve = await fetchDataWithError;
    console.log(resolve);
  } catch (error) {
    console.log("Ошибка:", error);
  }
}

fetchDataWithErrorAsync();

// 8

async function task1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Задача 1 завершена.");
    }, 1000);
  });
}

async function task2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Задача 2 завершена.");
    }, 2000);
  });
}
async function runTasks() {
  result1 = await task1();
  console.log(result1);
  result2 = await task2();
  console.log(result2);
}

runTasks();

// 9

async function taskA() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Задача A завершена.");
    }, 3000);
  });
}

async function taskB() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Задача B завершена.");
    }, 4000);
  });
}
async function runTasks2() {
  result = await Promise.all([taskA(), taskB()]);
  console.log(result[0], result[1]);
}

runTasks2();

//10

async function delayedMessage(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delay);
  });
}

async function run() {
  await delayedMessage("Hi", 2000);
}

run();
