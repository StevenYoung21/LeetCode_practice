/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {

  let lenS = s.length;
  let lenK = Math.pow(2,k) + 1;

    return lenS >= lenK;


};

var s= "00000000010011101", k = 4;
console.log(hasAllCodes(s,k));