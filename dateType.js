let date = new Date(2012, 0, 3)
alert(date)

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
alert(getLocalyDay(date))
alert(getWeekDay(date))