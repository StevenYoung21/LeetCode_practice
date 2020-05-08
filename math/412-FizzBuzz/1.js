/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let str = [];
    for (let i = 0 ;i < n ; i++ ){
        str[i] = i + 1;
        if( str[i] % 3 == 0 && str[i] % 5 != 0){
            str[i] = 'Fizz';
        }
        else if(str[i] % 5 == 0 && str[i] % 3 != 0){
            str[i] = 'Buzz';
        }
        else if (str[i] % 3 == 0 && str[i] % 5 == 0){
            str[i] = 'FizzBuzz';
        }
    }

    return str.map(String);
};

var num = 15;
console.log(fizzBuzz(num));
