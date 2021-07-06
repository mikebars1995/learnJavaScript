function* pseudoRandom(seed) {
    let value = seed
    while (true) {
        value = value * 16807 % 2147483647
        yield value
    }
}

generator = pseudoRandom(1)

console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)