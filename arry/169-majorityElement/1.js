/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    // let target = Math.ceil(nums.length / 2) ;

    nums.sort((a,b)=>a-b);

    let len = nums.length;

    let a = [nums[0]]; // 记录元素
    let b = [1]; // 记录次数

    let i = 1;
    let j = 0;
    while( len > 1 ){
        if(nums[i] == a[j]){
            b[j]++;
            i++;
            len--;
        }else{
            a.push(nums[i])
            b.push(1);
            i++;
            j++;
            len--;
        }
    }

    let maxIndex = b.indexOf(Math.max(...b));
    let maxNum = a[maxIndex];

return maxNum;
    
};

var arr = [1,1,1,1,1,2,3,3,3,3,3,3,3];
console.log(majorityElement(arr));