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

    let dayArr1 = [0,31,29,31,30,31,30,31,31,30,31,30];
    let dayArr2 = [0,31,28,31,30,31,30,31,31,30,31,30];

    let days = 0;

    if ((year % 4 == 0 && year % 100 != 0) || (year % 100 == 0 && year % 400 == 0)) {
        let days1 = dayArr1.slice(0,month);
        days = day + days1.reduce((a,b)=> a+b);
    }else{
        let days2 = dayArr2.slice(0,month);
        days = day + days2.reduce((a,b)=> a+b);
    }
    return days;
};

var date = "2003-03-01"
console.log(dayOfYear(date));