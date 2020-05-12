/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    let nums0 = 0;
    let len = nums.length;

    for(let i = 0; i < len ; i++){
        if (nums[i] == 0){
            nums.splice(i,1);
            nums0++;
            i--;
        }
    }

    while( nums0 > 0){
        nums.push(0);
        nums0--;
    }

    return nums;
};

var arr = [0,1,0,3,12];
console.log(moveZeroes(arr));