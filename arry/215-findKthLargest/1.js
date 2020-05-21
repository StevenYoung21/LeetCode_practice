/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {

    // 去重
    let arr = [];
    // arr = nums.filter( ( e, index) => index === nums.indexOf(e) );
    arr = nums.sort((a,b)=> b-a);


    if( arr.length > k - 1 ){
        return arr[k - 1];
    }else{
        return arr[0];
    }

// return arr;

};


var nums = [3,2,1,5,6,4];
let k = 2;
console.log(findKthLargest(nums,k));