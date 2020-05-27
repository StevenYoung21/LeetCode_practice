/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    if(nums.length == 0) return 0;

    nums.sort((a,b) => a-b );
    let k = [1];
    let j = 1;

    for( let i = 1; i < nums.length; i++ ){
        if( nums[i] - 1 == nums[i-1] ){
            j++;
            k.push(j);
        }else if(nums[i] == nums[i-1]){
            continue;
        }
        else{
            j=1;
            k.push(1)
        }
    }

    return Math.max(...k);

};

var nums = [1,2,0,1];
        // [ 1, 2, 3, 4, 100, 196, 197, 198, 199, 200 ]
console.log(longestConsecutive(nums));