/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {

let arr1 = s.slice(0,n);
let arr2 = s.slice(n);
let arr3 = arr2 +''+ arr1;
return arr3;

};

var str = 'lrloseumgh';
var k = 6;
console.log(reverseLeftWords(str,k));