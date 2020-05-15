/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
nums.sort((a,b)=>a-b);
let target = Math.floor(nums.length / 2);
return nums[target];
};

var arr = [1];
console.log(majorityElement(arr));