// let obj = {};

// function A() {
//     return obj;
// }
// function B() {
//     return obj;
// }

// let a = new A();
// let b = new B();

// alert(a == b); // true



// function Calculator() {
//     this.read = function () {
//         this.a = +prompt('Введите а...', '');
//         this.b = +prompt('Введите b...', '');
//     };
//     this.sum = function () {
//         // sum = a + b;
//         return this.a + this.b;
//     };
//     this.mul = function () {
//         // mul = a * b;
//         return this.a * this.b;
//     };
// };
// let calculator = new Calculator();
// calculator.read();
// alert('Sum = ' + calculator.sum());
// alert('Mul = ' + calculator.mul());
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        return this.value += +prompt('Enter num...', '')
    }
}
let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений