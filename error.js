// class MyError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = this.constructor.name;
//     }
// }

// class ValidationError extends Error { }

// class PropertyRequiredError extends ValidationError {
//     constructor(property) {
//         super("Нет свойства: " + property);
//         this.property = property;
//     }
// }

// // Использование
// function readUser(json) {
//     let user = JSON.parse(json);
//     if (!user.age) {
//         throw new PropertyRequiredError("age");
//     }
//     if (!user.name) {
//         throw new PropertyRequiredError("name");
//     }
//     return user;
// }

// // Рабочий пример с try..catch

// try {
//     let user = readUser('{ "age": 25 }');
// } catch (err) {
//     if (err instanceof ValidationError) {
//         alert("Неверные данные: " + err.message); // Неверные данные: Нет свойства: name
//         alert(err.name); // PropertyRequiredError
//         alert(err.property); // name
//     } else if (err instanceof SyntaxError) { // (*)
//         alert("JSON Ошибка Синтаксиса: " + err.message);
//     } else {
//         throw err; // неизвестная ошибка, пробросить исключение (**)
//     }
// }

class ReadError extends Error {
    constructor(message, cause) {
        super(message);
        this.cause = cause;
        this.name = 'ReadError';
    }
}

class ValidationError extends Error { /*...*/ }
class PropertyRequiredError extends ValidationError { /* ... */ }

function validateUser(user) {
    if (!user.age) {
        throw new PropertyRequiredError("age");
    }

    if (!user.name) {
        throw new PropertyRequiredError("name");
    }
}

function readUser(json) {
    let user;

    try {
        user = JSON.parse(json);
    } catch (err) {
        if (err instanceof SyntaxError) {
            throw new ReadError("Синтаксическая ошибка", err);
        } else {
            throw err;
        }
    }

    try {
        validateUser(user);
    } catch (err) {
        if (err instanceof ValidationError) {
            throw new ReadError("Ошибка валидации", err);
        } else {
            throw err;
        }
    }

}

try {
    readUser('{bad json}');
} catch (e) {
    if (e instanceof ReadError) {
        alert(e);
        // Исходная ошибка: SyntaxError:Unexpected token b in JSON at position 1
        alert("Исходная ошибка: " + e.cause);
    } else {
        throw e;
    }
}

class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
        this.name = 'FormatError';
    }
}



window.addEventListener('unhandledrejection', function(event) {
    // объект события имеет два специальных свойства:
    alert(event.promise); // [object Promise] - промис, который сгенерировал ошибку
    alert(event.reason); // Error: Ошибка! - объект ошибки, которая не была обработана
  });


  

  // the execution: catch -> catch -> then
new Promise((resolve, reject) => {

    throw new Error("Ошибка!");
  
  }).catch(function(error) { // (*)
  
    if (error instanceof URIError) {
      // обрабатываем ошибку
    } else {
      alert("Не могу обработать ошибку");
  
      throw error; // пробрасывает эту или другую ошибку в следующий catch
    }
  
  }).then(function() {
    /* не выполнится */
  }).catch(error => { // (**)
  
    alert(`Неизвестная ошибка: ${error}`);
    // ничего не возвращаем => выполнение продолжается в нормальном режиме
  
  });