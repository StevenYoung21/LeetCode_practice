/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {

    if (n===0 || n === 2)   return false;
    if (n ===1 ) return true;
 
    let arr = n.toString(3).split('');
    if(arr[0] == '2') return false;
    arr.shift(0);
    if(arr.includes('1') || arr.includes('2')) return false
    else return true;
    // return arr;
};

var a = 18;
console.log(isPowerOfThree(a));