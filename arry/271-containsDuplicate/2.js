/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    if(nums.length == 1 || nums.length == 0 ){
        return false;
    }

    nums.sort((a,b)=> a - b);
    for(let i = 0; i < nums.length -1 ; i++){
        if( nums[i] == nums[i+1]){
            return true;
        }
    }
    return false;
};

var arr = [2,14,18,22];
var arr2 = [1,1,1,3,3,4,3,2,4,2];

console.log(containsDuplicate(arr));
console.log(containsDuplicate(arr2))