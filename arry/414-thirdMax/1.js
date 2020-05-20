/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {

    // 去重
    let arr = [];
    arr = nums.filter( ( e, index) => index === nums.indexOf(e) );
    arr.sort((a,b)=> b-a);

    if( arr.length > 2 ){
        return arr[2];
    }else{
        return arr[0];
    }

};

var nums = [1,2];

console.log(thirdMax(nums));