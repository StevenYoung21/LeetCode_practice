/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {

let arr = heights.slice(0);

arr.sort((a,b) => a-b);
let k = 0;
for(let i = 0; i < arr.length; i++){
    if( arr[i] != heights[i] ){
        k++;
    }
}

return k;

};

var heights = [1,2,3,4,5]
console.log(heightChecker(heights));