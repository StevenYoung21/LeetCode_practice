/**
 *  溢出
 * 
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if ( n === 0 || n === 1){
        return 0;
    }
    let num = [];
    let num2 = []; // 
    for(let i = 0; i < n - 1; i++){
        num [i] = i + 1;
    }

   return num.filter(isPrime).length - 1;
};

function isPrime(num){
    for (let j = 2; j < num; j++){
        if(num % j === 0){
            return false;
        }
    }
    return true;
}

var num = 499979;
console.log(countPrimes(num));