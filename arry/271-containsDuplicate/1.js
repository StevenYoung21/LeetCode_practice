/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    if(nums.length == 1 || nums.length == 0 ){
        return false;
    }

    for(let i = 0; i < nums.length - 1 ; i++){
        for(let j = i + 1; j < nums.length; j++){
            if (nums[i] == nums[j]){
                return true;
            }
        }
    }
    return false;
};

var arr = [2,14,18,22,22];
var arr2 = [1,1,1,3,3,4,3,2,4,2];

console.log(containsDuplicate(arr));
// console.log(containsDuplicate(arr2))