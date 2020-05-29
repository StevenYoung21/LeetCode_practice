/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {

    let dateArr = date.split('-');
    dateArr = dateArr.map(Number);

    let year = dateArr[0];
    let month = dateArr[1];
    let day = dateArr[2];

    let days = 0;

    if ((year % 4 == 0 && year % 100 != 0) || (year % 100 == 0 && year % 400 == 0)) {
        switch (month) {
            case 1:
                days = day;
                break;
            case 2:
                days = day + 31;
                break;
            case 3:
                days = day + 31 + 29;
                break;
            case 4:
                days = day + 31*2 +29;
                break;
            case 5:
                days = day + 31*2 + 30 + 29;
                break;
            case 6:
                days = day + 31*3 + 30 + 29;
                break;
            case 7:
                days = day + 31*3 + 30 *2 + 29;
                break;
            case 8:
                days = day + 31*4 + 30 *2 + 29;
                break;
            case 9:
                days = day + 31*5 + 30 *2 + 29;
                break;
            case 10:
                days = day + 31*5 + 30 *3 + 29;
                break;
            case 11:
                days = day + 31*6 + 30 *3 + 29;
                break;
            case 12:
                days = day + 31*6 + 30 *4 + 29;
                break;
        }
    }else{
        switch (month) {
            case 1:
                days = day;
                break;
            case 2:
                days = day + 31;
                break;
            case 3:
                days = day + 31 + 28;
                break;
            case 4:
                days = day + 31*2 +28;
                break;
            case 5:
                days = day + 31*2 + 30 + 28;
                break;
            case 6:
                days = day + 31*3 + 30 + 28;
                break;
            case 7:
                days = day + 31*3 + 30 *2 + 28;
                break;
            case 8:
                days = day + 31*4 + 30 *2 + 28;
                break;
            case 9:
                days = day + 31*5 + 30 *2 + 28;
                break;
            case 10:
                days = day + 31*5 + 30 *3 + 28;
                break;
            case 11:
                days = day + 31*6 + 30 *3 + 28;
                break;
            case 12:
                days = day + 31*6 + 30 *4 + 28;
                break;
        }
    }
    return days;
};

var date = "2004-03-01";
console.log(dayOfYear(date));