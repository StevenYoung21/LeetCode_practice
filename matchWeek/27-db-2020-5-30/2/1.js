/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {

  let len = s.length;

  let left = 0;
  let right = k;
  let mySet = new Set();
  
  while( right <= len ){
    mySet.add(s.substring(left,right));
    left++;
    right++;
  }

  let myArr = [...mySet];
  return myArr.length == Math.pow(2,k);

};

var s= "00110110", k = 2;
console.log(hasAllCodes(s,k));