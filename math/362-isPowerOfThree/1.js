/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let num = [];
for(let i = 0; i < Math.sqrt(n) ; i++){
    num[i] = Math.pow(3,i);
}
if( num.includes(n) ) return true;
else return false;
};

var a = 43046721;
console.log(isPowerOfThree(a));