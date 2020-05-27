/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    let arr = s.trim().split(' ');
    return arr[arr.length-1].length;

};

var s = "Hello World ";
console.log(lengthOfLastWord(s));