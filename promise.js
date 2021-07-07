
//С использованием колбеков
// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;

//     script.onload = () => callback(null, script);
//     script.onerror = () => callback(new Error(`Не удалось загрузить скрипт ${src}`));

//     document.head.append(script);
//   }

function loadScript(src) {
  return new Promise(function (resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

    document.head.append(script);
  });
}
let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(
  script => alert(`${script.src} загружен!`),
  error => alert(`Ошибка: ${error.message}`)
);

promise.then(script => alert('Ещё один обработчик...'));

function delay(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve('Done'), ms)
  })
}
delay(3000).then(() => alert('выполнилось через 3 секунды'));

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }

//   delay(3000).then(() => alert('выполнилось через 3 секунды'));



// Цепочка промисов
// loadScript("/article/promise-chaining/one.js")
//     .then(script => loadScript("/article/promise-chaining/two.js"))
//     .then(script => loadScript("/article/promise-chaining/three.js"))
//     .then(script => {
//         // скрипты загружены, мы можем использовать объявленные в них функции
//         one();
//         two();
//         three();
//     });




// fetch(`https://api.github.com/users/mikebars1995`)
//     // Загружаем ответ в формате json
//     .then(response => response.json())
//     // Показываем аватар (githubUser.avatar_url) в течение 3 секунд (возможно, с анимацией)
//     .then(githubUser => new Promise(function (resolve, reject) {
//         console.log(githubUser)
//         let img = document.createElement('img');
//         img.src = githubUser.avatar_url;
//         img.className = "promise-avatar-example";
//         document.body.append(img);

//         setTimeout(() => {
//             img.remove();
//             resolve(githubUser)
//         }, 3000); // (*)
//     }))
//     .then(githubUser=>alert(`Закончили показ ${githubUser.login}`))

// async function showAvatar() {

//     // запрашиваем JSON с данными пользователя
//     let response = await fetch('/article/promise-chaining/user.json');
//     let user = await response.json();

//     // запрашиваем информацию об этом пользователе из github
//     let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
//     let githubUser = await githubResponse.json();

//     // отображаем аватар пользователя
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);

//     // ждём 3 секунды и затем скрываем аватар
//     await new Promise((resolve, reject) => setTimeout(resolve, 3000));

//     img.remove();

//     return githubUser;
//   }

//   showAvatar();

function loadJson(url) {
  return fetch(url)
    .then(response => response.json());
}

function loadGithubUser(login) {
  return fetch(`https://api.github.com/users/${login}`)
    .then(response => response.json());
}

function showAvatar(githubUser) {
  return new Promise(function (resolve, reject) {
    console.log(githubUser)
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser);
    }, 3000);
  });
}

// Используем их:
//   loadJson('/article/promise-chaining/user.json').then(user => 
loadGithubUser('mikebars1995')
  .then(showAvatar)
  .then(githubUser => alert(`Показ аватара ${githubUser.name} завершён`));
// ...








let names = ['iliakan', 'remy', 'jeresig'];

let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
  .then(responses => {
    // все промисы успешно завершены
    for (let response of responses) {
      alert(`${response.url}: ${response.status}`); // покажет 200 для каждой ссылки
    }

    return responses;
  })
  // преобразовать массив ответов response в response.json(),
  // чтобы прочитать содержимое каждого
  .then(responses => Promise.all(responses.map(r => r.json())))
  // все JSON-ответы обработаны, users - массив с результатами
  .then(users => users.forEach(user => alert(user.name)));



//Функция для промисификации
function promisify(f, manyArgs = false) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function callback(err, ...results) { // наш специальный колбэк для f
        if (err) {
          return reject(err);
        } else {
          // делаем resolve для всех results колбэка, если задано manyArgs
          resolve(manyArgs ? results : results[0]);
        }
      }

      args.push(callback);

      f.call(this, ...args);
    });
  };
};

  // использование:
//   f = promisify(f, true);
//   f(...).then(arrayOfResults => ..., err => ...)