/**
 * 解法一 栈
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    let len = digits.length;
    let stack = [];
    let newArr = [];

    for ( let i = len - 1 ; i >= 0; i-- ){ // 从后往前遍历数组

        stack.push(digits[i]); // 元素进栈

        if(stack.length == 1){ // 栈底元素需要进位时 

            if( stack[0]  == 9){ // 栈底元素为9
                if( i == 0){    //  元素全为9的情况
                    newArr.unshift(0);
                    stack[0] = 1;
                }else{
                    newArr.unshift(0); // 元素不全为9 的情况
                    // stack = []; // 清空栈
                }
            }
            else {
                stack[0] = stack[0] + 1;   // 栈底不用进位，栈底直接加一 （0-8）           
            }
            
        }
       }

       let endArr = stack.reverse().concat(newArr);

    // console.log(stack,newArr,endArr);
    return endArr;

};

var arr = [1,1,9,9];
var arr2 = [4,3,2,1];
var arr3 = [9];
// console.log(plusOne(arr));
plusOne(arr);