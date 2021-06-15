
let style = ["Джаз", "Блюз"];
console.log(style);
style.push("Рок-н-ролл");
console.log(style);
// let centerElem = Math.ceil(style.length / 2) - 1;
style[Math.ceil(style.length / 2) - 1] = "Классика";
console.log(style);
style.shift();
console.log(style);
style.unshift("Рэп", "Рэгги");
console.log(style);

// function sumInput() {

//     let numbers = [];

//     while (true) {

//       let value = prompt("Введите число", 0);

//       // Прекращаем ввод?
//       if (value === "" || value === null || !isFinite(value)) break;

//       numbers.push(+value);
//     }

//     let sum = 0;
//     for (let number of numbers) {
//       sum += number;
//     }
//     return sum;
//   }

//   alert( sumInput() );


// let arr = [];
// let result = 0;
// function sumInput() {

//   for (let i = 0; i < 100; i++) {
//     arr[i] = +prompt('Enter element...', '');
//     console.log(arr);
//     if (arr[i] == '') break;
//   };
//   return result = arr.reduce((sum, current) => sum + current, 0);
// };
// alert(sumInput());

// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     let partialSum = 0;

//     for (let item of arr) { // для каждого элемента массива
//       partialSum += item; // добавляем значение элемента к partialSum
//       maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
//       if (partialSum < 0) partialSum = 0; // ноль если отрицательное
//     }

//     return maxSum;
//   };

//   alert(getMaxSubSum([-1, 2, 3, 9, 11]));

//сортировка чисел
// let arr = [1, 2, 66, 23, 15, 3, 56, 32];

// arr.sort((a, b) => a - b);

// alert(arr);  // 1, 2, 15
// сумма элементов массива в одну строчку
// let arr = [1, 2, 3, 4, 5];

// let result = arr.reduce((sum, current) => sum + current, 0);

// alert(result); // 15
function camelize(str) {
  // let arrStr = str.split('-');
  // console.log(str);
  // for (let i = 1; i < arrStr.length; i++) {
  //   let partArrStr = arrStr[i].split('');
  //   partArrStr[0] = partArrStr[0].toUpperCase();
  //   arrStr[i] = partArrStr.join('');
  // };
  // return str = arrStr.join('');
  const mapFunc = (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
  return str
    .split('-')
    .map(mapFunc)
    .join('');

};

// alert(camelize("background-color"));
// alert(camelize('list-style-image'));
// alert(camelize("-webkit-transition"));

// let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  return arr.filter(item => (item <= b && item >= a));
};
// let filtered = filterRange(arr, 1, 7);

// alert(filtered); // 3,1 (совпадающие значения)

// alert(arr); // 5,3,8,1 (без изменений)

// let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1)
    }
  }
};

// filterRangeInPlace(arr, 1, 4);


// alert(arr);
// let randomNum = randomInteger(1, 100);
// arr.push(12, 53, 23, 74, 27, 18,);
// alert(arr.sort((a, b) => b - a));//сортировка чисел по убыванию


// let arr = ["HTML", "JavaScript", "CSS"];
// let sortedArr = copySorted(arr);

function copySorted(arr) {
  return arr.concat().sort();
};
// alert(arr);
// alert(sortedArr);

function Calculator() {
  let operators = [
    ['+', (a, b) => a + b],
    ['-', (a, b) => a - b],
  ];
  this.calculate = function (str) {
    let res
    partStr = str.split(" ");
    for (let key of operators) {
      if (key[0] == partStr[1]) {
        res = key[1]((+partStr[0]), (+partStr[2]));
      }
    }
    return res;
  }
  this.addMethod = function (name, func) {
    operators.push([name, func])
  }
};
// let calc = new Calculator;

// alert(calc.calculate("3 - 7")); // 10

// let powerCalc = new Calculator;

// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 / 3");
// alert(result); // 8

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [vasya, petya, masha];

// let usersMapped = users.map(user => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id
// }))

// console.log(usersMapped)

// alert(usersMapped[0].id) // 1
// alert(usersMapped[0].fullName) // Вася Пупкин

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

// let arr = [vasya, petya, masha];
// console.log(arr)
// arr.sort((a,b) => a.age - b.age)

function sortByAge(arr) {
  return arr.sort((a, b) => a.age - b.age)

}


// sortByAge(arr);
// console.log(arr)

// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя

// let arr = [1, 2, 3];
function randomInteger(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.floor(rand);
}
// arr.sort((a, b) => Math.random())
function shuffle(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = randomInteger(1, 4)
    if (!(arr[i] == arr[i + 1])) {
      continue;
    } else arr[i] = randomInteger(1, 4)
  } return arr

}
// shuffle(arr);
// console.log(arr)


function unique(arr) {
  return Array.from(new Set(arr))

}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

// alert(unique(values)); // Hare,Krishna,:-O

function aclean(arr) {
  let map = new Map()
  for (let word of arr) {
    let sorted = word.toLowerCase().split('').sort().join('')
    map.set(sorted, word)
  } return Array.from(map.values())
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"


let messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' }
]

let readMessages = new WeakSet();

readMessages.add(messages[0])
readMessages.add(messages[1])

readMessages.add(messages[0])

// alert('Read message 0: ' + readMessages.has(messages[0]))

// messages.shift()

let dateReadMessages = new WeakMap()

dateReadMessages.set(messages[0], new Date(2021, 4, 0))

// alert(dateReadMessages.get(messages[0]))


let salaries = {
  'John': 100,
  'Pete': 300,
  'Mary': 250
}
function topSalaries(obj) {
  let max = 0
  let maxName = null
  for (const [name, salary] of Object.entries(obj)) {
    if (max < salary) {
      max = salary;
      maxName = name
    }
  } return maxName
}

function sumSalaries(obj) {
  return Object.values(obj).reduce((a, b) => a + b, 0)
  // let result = 0
  // for (let value of Object.values(obj)) {
  //   result = result + value
  // } return result

}

let user = {
  name: 'John',
  years: 30
}

function cout(obj) {
  return Object.keys(obj).length
}
alert(cout(user))
alert(sumSalaries(salaries))
alert(topSalaries(salaries))

let { name, years: age, isAdmin = false } = user

alert(name)
alert(age)
alert(isAdmin)

let now = new Date()

console.log(now)