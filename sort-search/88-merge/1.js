
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

   let i = 0;
   let j = m;
   while( i < n){
    nums1[j] = nums2[i];
    i++;
    j++;
   }
   nums1.sort((a,b) => a-b); 
return nums1;
};

var nums1 = [1,2,3,0,0,0];
var m = 3;
var nums2 =  [2,5,6];
var n = 3;
console.log(merge(nums1,m,nums2,n));