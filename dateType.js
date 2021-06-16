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

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month, 0)
    return date.getDate()
}

function getSecondsToday() {
    const today = new Date()
    return today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds()
}

function getSecondsToTomorrow() {
    const now = new Date()
    const totalSeondsInADay = 86400
    return totalSeondsInADay - (now.getHours() * 60 + now.getMinutes()) * 60 + now.getSeconds()
}

function formatDate(date) {
    const diff = new Date() - date
    if (diff < 1000) {
        return 'Прямо сейчас'
    }
    let sec = Math.floor(diff / 1000)
    if (sec < 60) {
        return sec + ' сек назад'
    }
    let min = Math.floor(diff / 60000)
    if (min < 60) {
        return min + ' мин назад'
    }
    let d = date
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2))
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':')
}
console.log(getLocalyDay(date))
console.log(getWeekDay(date))
console.log(getDayAgo(date, 3))
console.log(getLastDayOfMonth(2013, 2))
console.log(getSecondsToday())
console.log(getSecondsToTomorrow())
console.log(formatDate(new Date(new Date - 1)))
console.log(formatDate(new Date(new Date - 2 * 1000)))
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)))
console.log(formatDate(new Date(new Date - 86400 * 1000)))
