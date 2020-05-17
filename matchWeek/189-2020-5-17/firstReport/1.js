/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {

    let qs = 0;
    for ( let i = 0; i < startTime.length; i++){
        if( queryTime >= startTime[i]  && queryTime <= endTime[i] ){
            qs++;
        }

    }
    return qs;

};

var startTime = [1,1,1,1], 
    endTime = [1,3,2,4];
var queryTime = 7;

console.log(busyStudent(startTime,endTime,queryTime));