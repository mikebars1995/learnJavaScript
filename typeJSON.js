let user = {
    name: "Василий Иванович",
    age: 35
}

let userJ = JSON.stringify(user)
let userNoJ = JSON.parse(userJ)
console.log(userJ)
console.log(userNoJ)


let room = {
    number: 23
}
let meetup = {
    title: "Совещание",
    occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
    place: room
}
room.occupiedBy = meetup
meetup.self = meetup

console.log(JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value
}))
