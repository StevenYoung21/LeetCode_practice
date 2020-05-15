
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    let preSum = nums[0];
    let nowSum = nums[0];
    let maxSum = nums[0];

    for(let i = 1; i < nums.length; i++){
        nowSum = Math.max(preSum+nums[i], nums[i]);
        maxSum = Math.max(maxSum,nowSum);
        preSum = nowSum;
    }

    return maxSum;

};

var arr = [-1,1,-1];
console.log(maxSubArray(arr));