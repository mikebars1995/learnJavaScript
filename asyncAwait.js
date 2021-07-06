async function showAvatar() {

    // запрашиваем JSON с данными пользователя
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();
  
    // запрашиваем информацию об этом пользователе из github
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();
  
    // отображаем аватар пользователя
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
  
    // ждём 3 секунды и затем скрываем аватар
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  
    img.remove();
  
    return githubUser;
  }
  
  showAvatar();



// async function loadJson(url) {
//     let response = await fetch(url)

//     if (response.status == 200) {
//         let json = await response.json()
//         return json
//     }

//     throw new Error(response.status)
// }

// loadJson('no-such-user.json').catch(alert)


class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {
    let response = await fetch(url)

    if (response.status == 200) {
        return response.json()
    } else {
        throw new HttpError(response);
    }

}

async function demoGithubUser() {
    let user
    while (true) {
        let name = prompt('Enter login', 'iliakan')
        try {
            user = await loadJson(`https://api.github.com/users/${name}`)
            break;
        } catch (err) {
            if (err instanceof HttpError && err.response.status == 404) {
                alert("Такого пользователя не существует, пожалуйста, повторите ввод.")
            } else {
                throw err
            }
        }
    }
    alert(`Полное имя: ${user.name}`)
    return user
}

demoGithubUser()



let range = {
    from: 1,
    to: 5,
  
    // for await..of вызывает этот метод один раз в самом начале
    [Symbol.asyncIterator]() { // (1)
      // ...возвращает объект-итератор:
      // далее for await..of работает только с этим объектом,
      // запрашивая у него следующие значения вызовом next()
      return {
        current: this.from,
        last: this.to,
  
        // next() вызывается на каждой итерации цикла for await..of
        async next() { // (2)
          // должен возвращать значение как объект {done:.., value :...}
          // (автоматически оборачивается в промис с помощью async)
  
          // можно использовать await внутри для асинхронности:
          await new Promise(resolve => setTimeout(resolve, 1000)); // (3)
  
          if (this.current <= this.last) {
            return { done: false, value: this.current++ };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
  
  (async () => {
  
    for await (let value of range) { // (4)
      alert(value); // 1,2,3,4,5
    }
  
  })()