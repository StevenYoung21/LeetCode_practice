/*
* 从后往前遍历
*/ 

var twoSum = function(nums, target) {
    let i = nums.length;
    while(i > 1) {
        let last = nums.pop();
        if (nums.indexOf(target - last) > -1) {
            return [nums.indexOf(target - last), nums.length];
        }
        i--;
    }
}
var nums = [2, 5, 6, 11, 10];
var target = 21;
console.log(twoSum(nums,target));