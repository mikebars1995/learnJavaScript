let target = {}
let proxy = new Proxy(target, {})

proxy.test = 5
console.log(target)
console.log(proxy)

for (let key in proxy) console.log(key)

let numbers = [0, 1, 2]

numbers = new Proxy(numbers, {
    get(target, prop) {
        if (prop in target) {
            return target[prop]
        } else {
            return 0
        }
    },
    set(target, prop, val) {
        if (typeof val == 'number') {
            target[prop] = val
            return true
        } else {
            return false
        }
    }

})


console.log(numbers[1])
console.log(numbers[123])
numbers.push(3)
numbers.push(4)
numbers.push(543)
// numbers.push('3232')
console.log(numbers)



let dictionary = {
    'Hello': 'Hola',
    'Bye': 'Adios',
}

dictionary = new Proxy(dictionary, {
    get(target, phrase) {
        if (phrase in target) {
            return `${phrase} : ${target[phrase]}`
        } else {
            return `нет такого перевода  ${phrase}`
        }
    }
})

console.log(dictionary['Hello'])
console.log(dictionary['Hiiii'])

let user = {
    name: "John",
    age: 30,
    _password: '***'
}

user = new Proxy(user, {
    get(target, prop) {
        if (prop.startsWith('_')) {
            throw new Error('Отказано в доступе')
        } else {
            let value = target[prop]
            return (typeof value === 'function') ? value.bind(target) : value
        }
    },
    set(target, prop, val) {
        if (prop.startsWith('_')) {
            throw new Error('Отказано в доступе')
        } else {
            target[prop] = val
            return true
        }
    },
    deleteProperty(target, prop) {
        if (prop.startsWith('_')) {
            throw new Error("Отказано в доступе")
        } else {
            delete target[prop]
            return true
        }
    },
    ownKeys(target) {
        return Object.keys(target).filter(key => !key.startsWith('_'))
    }
})

try {
    console.log(user._password)
} catch (error) {
    console.log(error.message)
}

try {
    user._password = "Test"
} catch (error) {
    console.log(error.message)
}

try {
    delete user._password
} catch (error) {
    console.log(error.message)
}

for (let key in user) console.log(key)

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
console.log(user)

let chars = {}

chars = new Proxy(chars, {
    ownKeys(target) {
        return ['a', 'b', 'c']
    },

    getOwnPropertyDescriptor(target, prop) {
        return {
            enumerable: true,
            configurable: true
        }
    }
})

console.log(Object.keys(chars))


let range = {
    start: 1,
    end: 10
}

range = new Proxy(range, {
    has(target, prop) {
        return prop >= target.start && prop <= target.end
    }
})

console.log(5 in range)
console.log(55 in range)

function delay(f, ms) {
    return new Proxy(f, {
        apply(target, thisArg, args) {
            setTimeout(() => target.apply(thisArg, args), ms)
        }
    })
}

function sayHi(user) {
    console.log(`Hello, ${user}!`)
}

sayHi = delay(sayHi, 3000)

console.log(`sayHi.length = ${sayHi.length}`)

sayHi('John')

let otherUser = {
    name: "Вася",
};

otherUser = new Proxy(otherUser, {
    get(target, prop, receiver) {
        console.log(`GET ${prop}`);
        return Reflect.get(target, prop, receiver); // (1)
    },
    set(target, prop, val, receiver) {
        console.log(`SET ${prop}=${val}`);
        return Reflect.set(target, prop, val, receiver); // (2)
    }
});

let name = otherUser.name; // выводит "GET name"
otherUser.name = "Петя"; // выводит "SET name=Петя"

let anotherUser = {
    _name: "Гость",
    get name() {
        return this._name;
    }
};

let userProxy = new Proxy(anotherUser, {
    get(target, prop, receiver) { // receiver = admin
        return Reflect.get(...arguments); // (*)
    }
});


let admin = {
    __proto__: userProxy,
    _name: "Админ"
};

console.log(admin.name); // Админ