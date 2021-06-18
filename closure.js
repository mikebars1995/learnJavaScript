function sum(a) {
    return function (b) {
        return a + b
    }
}

console.log(sum(4)(8))

function inBeetween(a, b) {
    return function (x) {
        return x >= a && x <= b
    }
}

function inArray(arr) {
    return function (x) {
        return arr.includes(x)
    }
}
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBeetween(3, 7)))
console.log(arr.filter(inArray([1, 5, 10])))


function byField(fieldName) {
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1
}

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

console.log(users.sort(byField('age')))

function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let k = i
        let shooter = function () { // функция shooter
            alert(k); // должна выводить порядковый номер
        };
        shooters.push(shooter);
        i++;
    }

    return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
  // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...