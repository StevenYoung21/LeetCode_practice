/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {

    let preMax = nums[0];
    let preMin = nums[0];
    let nowMaxP = nums[0];
    let nowMinP = nums[0]
    let maxP = nums[0];

    for (let i = 1; i < nums.length; i++) {
        nowMaxP = preMax * nums[i];
        nowMinP = preMin * nums[i];

        preMax = Math.max( nowMaxP, nowMinP, nums[i] );
        preMin = Math.min( nowMaxP, nowMinP, nums[i] );

        maxP = Math.max(maxP,preMax);
  
    }
    return maxP;

};

var arr = [-2,3,-4];

console.log(maxProduct(arr));