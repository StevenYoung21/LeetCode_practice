/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let arr = s.split('')
    let result = [];
    let flag = 0;
    for (let i = 0; i < arr.length; i = i + k) {
        if (flag == 0) {
            let str = arr.slice(i, i + k);
            result.push(str.reverse());
            str = [];
            flag = 1;
        } else {
            let str = arr.slice(i, i + k);
            result.push(str);
            str = [];
            flag = 0;
        }
    }
    let res = result.map(String).toString().split(',').join('')
    return res;
};


var s = "abcdefg";
var k = 4;
console.log(reverseStr(s, k));