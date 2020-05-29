/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

    let len = nums.length;
    if(len == 0) return 0;
    let maxP = [];
    maxP[0] = nums[0];
  

    if( len > 1 ){
        maxP[1] = Math.max(nums[0], nums[1]);
        for( let i = 2; i < nums.length; i++ ){

            if( nums[i] + maxP[i-2] > maxP[i-1] )
            {
                maxP[i] = nums[i] + maxP[i-2];
            }else{
                maxP[i] = maxP[i-1];
            }
        }
        return maxP[maxP.length-1];
    }else{
        return Math.max(...maxP);
    }


};

var nums = [];
console.log(rob(nums));