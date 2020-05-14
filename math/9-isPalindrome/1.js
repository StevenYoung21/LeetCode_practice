/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    if(x<0) return false;

    return x.toString().split('').join('') === x.toString().split('').reverse().join('')

};

var num = 10;
console.log(isPalindrome(num));