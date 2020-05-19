/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {

    let arr = s.split('')
    let len = arr.length;

    let i = 0;
    let j = len - 1;

    while(i < j ){
        if (arr[i] === arr[j]) {
          arr.shift();
          arr.pop();
          j = j - 2;   
        } else {   
            break;
        } 
      }

 
    let arr1 = arr.slice(1);
    let arr2 = arr.slice(0,-1);

    if( isPalindrome(arr) ){
        return true;
    }else{
        return isPalindrome(arr1) || isPalindrome(arr2);
    }

};

var isPalindrome = function(s) {

let i = 0;
let j = s.length-1;

let len = j+1;

while( len > 0){
    if( s[i] != s[j] ){
       return false;
    }
    i++;
    j--;
    len -=2;
}
return true;

}


var str = "bcapcb"
var str2 = 'a'

console.log(validPalindrome(str));
// console.log(isPalindrome(str2))