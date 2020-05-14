/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    
    let arr1 = a.split('').map(Number);
    let arr2 = b.split('').map(Number);

    let numA = 0;
    let numB = 0;

    for( let i = arr1.length - 1; i > -1; i--){
        numA += arr1[i] * Math.pow(2,arr1.length  - i - 1);
    }
    for( let j = arr2.length - 1; j > -1; j--){
        numB += arr2[j] * Math.pow(2,arr2.length  - j - 1);
    }

    let numC = numA + numB;

     return numC.toString(2);
};

var a = '1010';
var b = '1011';
console.log(addBinary(a,b));