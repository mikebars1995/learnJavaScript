function makeCounter() {
    let count = 0
    function counter() {
        return count++;
    }
    counter.set = value => count = value
    counter.decrease = value => count--
    return counter;
}

function sum(a) {
    let currentSum = a
    function f(b) {
        currentSum += b
        return f
    }
    f.toString = function () {
        return currentSum
    }
    return f
}

let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter.set(20));
console.log(counter.decrease());
console.log(counter.decrease());
console.log(sum(4)(4)(17)(32))