function cachingDecorator(func, hash) {
    let cache = new Map();
    return function () {
        let key = hash(arguments);
        if (cache.has(key)) {
            return cache.get(key);
        }

        let result = func.call(this, ...arguments);
        cache.set(key, result);
        return result;
    };
}

function hash(args) {
    return [].join.call(args);
}



function spy(func) {
    function wrapper(...args) {
        wrapper.calls.push(args)
        return func.apply(this, arguments)
    }
    wrapper.calls = []
    return wrapper
}

function work(a, b) {
    console.log(a + b)
}
work = spy(work)
work(1, 6)
work(1, 2)
work(6, 4)

for (let args of work.calls) {
    console.log('call:' + args.join())
}

function delay(f, ms) {
    return function () {
        setTimeout(() => f.apply(this, arguments), ms)
    }
}

function f(x) {
    console.log(x)
}

let f1000 = delay(f, 1000)
let f2000 = delay(f, 2000)

f1000('test')
f2000('test')

function debounce(f, ms) {
    let isCooldown = false
    return function () {
        if (isCooldown) return;
        f.apply(this, arguments)
        isCooldown = true
        setTimeout(() => isCooldown = false, ms)
    }
}

let deb = debounce(console.log, 5000)
deb(2)
deb(7)

function throttle(func, ms) {
    let isThrottled = false
    savedArgs,
        savedThis;

    function wrapper() {
        if (isThrottled) {
            savedArgs = arguments
            savedThis = this
            return
        }
        func.apply(this, arguments)
        isThrottled = true
        setTimeout(function () {
            isThrottled = false
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs)
                savedArgs = savedThis = null
            }
        }, ms)
    }
    return wrapper
}