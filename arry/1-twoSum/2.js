/*
* 从前往后遍历
*/ 

var twoSum = function(nums, target) {
    let j = nums.length;
    for (let i = 0; i < j - 1 ; i++ ){
        let fist = nums.shift();
        if(nums.indexOf(target - fist) > -1 ){
            return [i, nums.indexOf(target - fist) + i + 1];  // 计算元素在切割后数组中和原数组的位置关系
        }
    }
  
}
var nums = [2, 5, 6, 11, 10];
var target = 21;
console.log(twoSum(nums,target));