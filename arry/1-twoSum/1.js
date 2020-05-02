

var twoSum = function(nums, target) {
   
    for(var i=0; i < nums.length - 1  ; i++){
        for(var j = i + 1; j < nums.length ; j++){
            if((nums[i]+nums[j]) == target ){
                return [i,j];
            }
        }
    }
};


var nums = [2, 5, 5, 11];
var target = 13;
// twoSum(nums,target);
console.log(twoSum(nums,target));