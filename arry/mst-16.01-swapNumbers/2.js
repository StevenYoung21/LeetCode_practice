/**
 * @param {number[]} numbers
 * @return {number[]}
 */
var swapNumbers = function(numbers) {

    numbers[0] = numbers[0] + numbers[1];
    numbers[1] = numbers[0] - numbers[1];
    numbers[0] = numbers[0] - numbers[1];

    return numbers;

};

var numbers = [1,2];
console.log(swapNumbers(numbers));