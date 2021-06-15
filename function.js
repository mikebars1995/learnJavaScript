'use strict'
function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // простое
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

function checkAge(age) {
  // return (age > 18) ? true : confirm("Родители разрешили?");
  return (age > 18) || confirm("Родители разрешили?");
}

// let age = +prompt("ddd", '');
// checkAge(age);
// alert(checkAge(age));
function min(a, b) {
  //  a = +prompt("a = ", "");
  //  b = +prompt("b = ", "");
  return (a < b) ? alert(a) : alert(b);
}

// let a = +prompt("a = ", "");
// let b = +prompt("b = ", "");
// min(a, b);
function pow(x, n) {
  return n > 0 ? x ** n : alert("степень n < 0");
}

function esPow() {
  let x = +prompt("x = ", "");
  let n = +prompt("n = ", "");
  alert(pow(x, n));
}

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
//Function Expression\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );
//Стрелочные функции\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//   ask(
//     "Вы согласны?",
//     () =>  alert("Вы согласились.") ,
//     () =>  alert("Вы отменили выполнение.")
//   );
//Логирование\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
for (let i = 0; i < 5; i++) {
  console.log("value,", i);
}



// function pow(x, n) {
//   let result = 1;

//   for(let i = 0; i < n ;i++) {
//       result *= x;
//     }

//   return result;
// }

// let x = prompt("x?", '');
// let n = prompt("n?", '');

// if (n <= 0) {
//   alert(`Степень ${n} не поддерживается, 
//   введите целую степень, большую 0`);
// }else {
//     alert( pow(x, n) );
// }

const setName = (name) => {
  return
  if (name === 0) {
    console.log(name);
  } else if (name) {
    console.log('не сработало');
  }
}

setName(0)

let n = [1, 2, 5, 8, 74, 6, 9,].map((num) => {
  const newNum = num ** 2
  return newNum
})

// while (n.length) {
//   const i = n.pop()
//   console.log(i);
// }


console.log(n);
// Проверка обькта на пустоту
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
let whName = {}

// alert(isEmpty(whName));

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0
for (let key in salaries) {
  if (isEmpty(salaries)) {
    sum = 0;
  };
  sum += salaries[key];
}
// alert(typeof(sum));
// let k = 1
// alert(typeof(k));

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    } else continue;
  }
}
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
for (let key in menu) {
  console.log(key);
  console.log(menu[key]);
};
multiplyNumeric(menu);
for (let key in menu) {
  console.log(key);
  console.log(menu[key]);
};

let user = {
  name: "Джон",
  hi() { alert(this.name); }
};

let hi = user.hi.bind(user, ['John']);


// const hi = () => {
//   user.hi('John')
// };


let calculator = {
  read() {
    this.x = +prompt('Введите х...', '');
    this.y = +prompt('Введите у...', "");
  },
  sum() {
    return this.x + this.y;
  },
  mul() {
    return this.x * this.y;
  }
};

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());


let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
    return this;
  }
};
ladder
.up()
.up()
.down()
.up()
.up() // 1
.showStep();


let text = 'blood loop pool';
        text.split(' ');
        console.log(text.split(' '))