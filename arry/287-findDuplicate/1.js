/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {

    let arr = [];
    for(let j = 0; j < nums.length; j++){
        arr.push(nums[j]);
    }
    arr.sort((a,b) => a-b);
    
   for(let i = 0; i < arr.length; i++){
       if( arr[i] == arr[i+1] ){
           return arr[i];
       }
   }

    // return [arr,nums];

};

var nums = [1,3,4,2,2];
console.log(findDuplicate(nums));