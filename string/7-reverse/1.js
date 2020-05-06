/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    let sign = Math.sign(x);
    let res = (Math.abs(x) + '').split('').reverse().join('') * sign;
    if (res > Math.pow(2,31) - 1 || res < Math.pow(2,31) * -1  ){
        res = 0;
    }
    return res;

}
    


var a = 123;
var b = -123;
var c = 120;
var d = 1534236469;
var g =  2147483647;
var f = -2147483412
console.log(reverse(a));
console.log(reverse(b));
console.log(reverse(c));
console.log(reverse(d));