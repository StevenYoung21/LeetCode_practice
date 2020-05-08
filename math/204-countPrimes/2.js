/**
 *  动态规划
 * 
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let arr = []
    let counterArr = [];
    let count = 0;
    for (let i = 0; i < n - 1; i++){
        arr[i] = i + 1;
        if( isPrime(arr[i]) == 1){
            count++;
        }
    }
    return count;
};

function isPrime(num){
    if ( num === 0 || num === 1){
        return false;
    }
    for (let j = 2; j <= Math.sqrt(num); j++){
        if(num % j === 0){
            return false;
        }
    }
    return true;
}

var num = 499979;
console.log(countPrimes(num));
// console.log(isPrime());