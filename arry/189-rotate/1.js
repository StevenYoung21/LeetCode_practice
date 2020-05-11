/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

    let arr1 =  nums.splice(nums.length-k); // 切割出要添加到数组头部的序列
    // console.log(nums.length);
    nums.splice(0,0,...arr1);
    // console.log(nums.length);
    return nums;

};

var arr = [1,2,3,4,5,6,7];
var k = 3

console.log(rotate(arr,k));