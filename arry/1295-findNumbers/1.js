/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {

    let k =[];
    let num = 0;

    for( let i = 0; i < nums.length; i++ ){

        k[i] = nums[i].toString().length;
        if( k[i] % 2 == 0 ){
            num++;
        }

    }

    return num;

};

var nums = [12,345,2,6,7896];

console.log(findNumbers(nums));