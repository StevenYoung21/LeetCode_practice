/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {

    let a = target.slice(0);
    let b = arr.slice(0);

    a = a.sort((a,b) => a-b);
    b = b.sort((a,b) => a-b);

    return a.toString() === b.toString()
};

var target = [3,7,9], arr = [3,7,11]

console.log(canBeEqual(target,arr));