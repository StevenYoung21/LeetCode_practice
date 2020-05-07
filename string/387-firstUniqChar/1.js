/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for(let i = 0; i < s.length; i++){
       if( s.indexOf(s[i]) == s.lastIndexOf(s[i]))  
       {
           return i;
       }
    }
    return -1;
};

var arr = 'leetcode';
var arr2 = 'loveleetcode';
console.log(firstUniqChar(arr2));