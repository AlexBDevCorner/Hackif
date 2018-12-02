export default (dateFrom, dateTo) => {

    let days = []
    let day = dateFrom

    while (day <= dateTo) {
        days.push(day)
        day = day.clone().add(1, 'd')
    }

    return days

}




