/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    if(x<0) return false;
    if(x==0) return true;

    let arr = [];
    let i = 0;
    while( x > 0 ){
        arr[i] = x % 10;
        x = parseInt( x / 10 ) ;
        i++;
    }

    let len = arr.length;

    let j = 0, k = len - 1;

    while( len > 0 ){
        if(arr[j] != arr[k]){
            return false;
        }else{
            j++;
            k--;
            len -= 2;
        }
    }
    return true;

    // return arr;
};

var num = 1000021;
console.log(isPalindrome(num));