
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