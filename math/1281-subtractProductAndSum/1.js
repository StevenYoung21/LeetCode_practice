/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {

    let arr = n.toString().split('');
    arr = arr.map(Number);
    let p = 1;
    let s = 0;

    for( let i = 0; i < arr.length; i++){
         p = p * arr[i];
         s = s + arr[i];   
    }

    return  p - s;

};

let n = 4421;
console.log(subtractProductAndSum(n));