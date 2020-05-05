
/**
 * 解法四 bigInt
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    let arr = digits.join('');  // 数组转字符串
    let num = BigInt(arr) + 1n + ''; // BigInt 可以表示任意大的整数
    let arr2 = num.split('');
    let endArr = arr2.map(Number);
    return endArr;
    
    };
    
    var arr = [1,1,9,9];
    var arr2 = [4,3,2,1];
    var arr3 = [9,9,9];
    console.log(plusOne(arr3));
    