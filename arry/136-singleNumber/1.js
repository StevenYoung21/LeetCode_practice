/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let len = nums.length;
    let Max = Infinity;
    if(len == 1){
        return nums[0];
    }
    for (let i = 0; i < len - 1; i++){
        for (let j = i + 1; j < len; j++){
            if( nums [i] == nums[j] ){
                nums[i] = Max;
                nums[j] = Max;
            }
        }
    }
    let a =  nums.find((e)=>{
        return e != Max;
    });
return a;
};

var arr1 = [2,2,1];
var arr2 = [4,1,2,1,2];
var arr3 = [-1,-1,-2]

console.log(singleNumber(arr1));
console.log(singleNumber(arr2));
console.log(singleNumber(arr3));
