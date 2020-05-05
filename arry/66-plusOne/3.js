
/**
 * 解法三 字符串操作
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

// let arr = digits.toString().replace(/,/g,'');  // 将数组转化为字符串，替换掉所有逗号

let arr = digits.join('');  // 数组转字符串
let num = (parseInt(arr) + 1);      // 字符串转化为数字，再加一；
let arr2 = num.toString().split('');    // 将数字num转化为字符串数组
let endArr = arr2.map(Number);  // 将字符串数组中每个元素转化成数字
return endArr;

};

var arr = [1,1,9,9];
var arr2 = [4,3,2,1];
var arr3 = [9,9,9];
console.log(plusOne(arr3));
