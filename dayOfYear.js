/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    let splitDate = date.split('-');
    let year = parseInt(splitDate[0]);
    let month = parseInt(splitDate[1]);
    let day = parseInt(splitDate[2]);
    let leapYear = false;
    if (year%4 === 0 && !(year%100 === 0) || year%400 === 0){
        leapYear = true;
    }
    let months = {1: 31, 2: 28, 3:31, 4:30, 5:31, 6:30, 7:31, 8:31, 9: 30, 10:31, 11:30, 12:31};
    let dayCount = 0;
    for (let i = 1; i < month; i++){
        dayCount += months[i];
        if (i === 2 && leapYear === true){
            dayCount++;
        }
    }
    return dayCount + day;
};
