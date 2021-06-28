let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__: head
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

let pockets = {
    money: 2000,
    __proto__: bed
};

console.log(bed.glasses)
console.log(pockets.pen)


Function.prototype.defer = function (ms) {
    let f = this
    return function (...args) {
        setTimeout(() => f.apply(this, args), ms)
    }
}
function f(a, b) {
    console.log(a + b)
}
f.defer(1000)(3, 7)

let dictionary = Object.create(null, {
    toString: {
        value() {
            return Object.keys(this).join()
        }
    }
})

dictionary.apple = 'Apple'
dictionary.__proto__ = 'Test'

for (let key in dictionary) {
    console.log(key)
}

alert(dictionary)
