/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    let arr = strs[0]

    if(strs.length == 0 && strs == '') return '';

    for(let i = 1; i < strs.length; i++){
        let j = 0;
        while( j < arr.length && j < strs[i].length){
            if( arr[j] == strs[i][j]){
                j++;
            }else{
                break;
            }
        }
        arr = arr.substring (0,j) 
        if (arr == '') return '';
    }

    return arr;
};

var strs = ["dog","racecar","car"];

console.log(longestCommonPrefix(strs));