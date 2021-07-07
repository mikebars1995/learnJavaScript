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
//   loadGithubUser('mikebars1995')
//     .then(showAvatar)
//     .then(githubUser => console.log(`Показ аватара ${githubUser.login} завершён`));
  // ...