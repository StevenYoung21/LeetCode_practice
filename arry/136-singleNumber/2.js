/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

    let temp = 0;
    for(let i = 0; i < nums.length; i++){
        temp = temp ^ nums[i];
    }

    return temp;

};

// var arr1 = [2,2,1];
// var arr2 = [4,1,2,1,2];
var arr3 = [-1,-1,-2]

// console.log(singleNumber(arr1));
// console.log(singleNumber(arr2));
// console.log(singleNumber(arr3));

console.log(singleNumber(arr3));
