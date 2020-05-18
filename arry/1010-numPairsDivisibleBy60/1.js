/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {

    let num = 0;
    for(let i = 0; i < time.length - 1; i++){
        for (let j = i + 1; j < time.length ; j++){
            if(( time[i] + time[j]) % 60 == 0){
                num++;
            }
        }
    }
    return num;
};

var time = [70,311,74,427,232,211,126,83,357,118,97,428]
console.log(numPairsDivisibleBy60(time));
