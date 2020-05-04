/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let len = s.length;
    for(let i = 0; i < len - 1 ; i++ ){
        let tep;
        tep = s[len-1];
        s[len-1] = s[i];
        s[i] = tep;
        len --;
    }
};

var str = ["h","e","l","l","o","w"];
console.log(reverseString(str));