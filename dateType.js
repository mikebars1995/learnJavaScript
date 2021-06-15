let date = new Date(2015, 0, 2)
console.log(date)

function getWeekDay(date) {
    let weekDay = [
        'ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'
    ]
    return weekDay[date.getDay()]
}

function getLocalyDay(date) {
    let localyDay = date.getDay()
    if (localyDay == 0) {
        localyDay = 7
    }
    return localyDay;
}

function getDayAgo(date, days) {
    let dateAgo = new Date(date)
    dateAgo.setDate(date.getDate() - days)
    return dateAgo.getDate()
}
console.log(getLocalyDay(date))
console.log(getWeekDay(date))
console.log(getDayAgo(date, 3))

