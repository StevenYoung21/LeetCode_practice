/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {

let k = 0;
while( num > 0 ){
    if( num % 2 == 0 ){
        num = num / 2;
        k++;
    }else{
        num = num - 1;
        k++;
    }
}
return k;
};


var num = 123;
console.log(numberOfSteps(num));