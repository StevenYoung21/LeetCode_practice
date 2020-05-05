
/**
 * 解法二 余数法
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    let len = digits.length;

    // 出现进位情况，digits[len - 1] == 9 

    if(digits[len - 1] == 9){  // 个位出现9是万恶之源
        digits[len - 1] = 0;
        for ( let i = len - 2; i >= 0; i-- ){
            digits[i]++;    
            digits[i] = digits[i] % 10; 
            if(digits[i] != 0){  //// 如果余数不为0，说明不发生进位，直接返回数组； 如果余数为0，则循环继续；
                return digits; 
            }
        }

        // 考虑特殊情况 [9]、[9,9]、[9,9,9]...
        // 这种情况 digits 存的全是 0， 只需要在digits 数组前加一个1 即可
        digits.unshift(1);
        return digits;

    }
    else {
        digits[len - 1]++; // 不发生进位，直接个位加一
        return digits;
    }

};

var arr = [1,1,9,9];
var arr2 = [4,3,2,1];
var arr3 = [9,9,9];
console.log(plusOne(arr3));
