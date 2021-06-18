function sumTo(n) {
    //Вариант с формулой
    return n * (n + 1) / 2
    // Вариант с циклом
    // let res = 0
    // for (let i = n; i > 0; i--) {
    //     res += i
    // } return res
    // вариант с рекурсией
    // if (n == 1) {
    //     return n
    // } else {
    //     return n + sumTo(n - 1)
    // }
}
function factorial(n) {
    if (n == 1) return n;
    return n * factorial(n - 1)
}
function fib(n) {
    //Рекурсия работает очень долго в этом случае
    // if (n == 1 || n == 2) return 1
    // return fib(n - 1) + fib(n - 2)
    let a = 1
    let b = 1
    for (let i = 3; i <= n; i++) {
        let c = a + b
        a = b
        b = c
    } return b
}

console.log(sumTo(100))
console.log(factorial(5))
console.log(fib(77))


let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
}

function printList(list) {
    console.log(list.value)
    if (list.next) printList(list.next)
    //вариант с циклом
    // let tmp = list
    // while (tmp) {
    //     console.log(tmp.value)
    //     tmp = tmp.next
    // }
}

function printReverseList(list) {
    if (list.next) printReverseList(list.next)
    console.log(list.value)

    //вариант с циклом более сложный
    // let arr = []
    // let tmp = list
    // while (tmp) {
    //     arr.push(tmp.value)
    //     tmp = tmp.next
    // }
    // for (let i = arr.length - 1; i >= 0; i--) {
    //     console.log(arr[i])
    // }
}

printList(list)
printReverseList(list)