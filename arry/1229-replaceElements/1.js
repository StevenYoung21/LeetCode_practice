/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {

    let max = 0;

    let arr2 = [];

    let len = arr.length;

    while( len > 0){
        arr.shift();
        arr2.push(Math.max(...arr));
        len--;
    }

    arr2[arr2.length-1] = -1;

    return arr2;
};

var arr = [17,18,5,4,6,1];
console.log(replaceElements(arr));