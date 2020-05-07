
var arr = [7, 1, 5, 3, 6, 4];
var arr2 = [10, 4, 2, 1];
// var maxArr = Math.max(...arr);  
// var minArr = Math.min(...arr);

// console.log(max,min);

// var maxIndex = arr.indexOf(maxArr);
// var minIndex = arr.indexOf(minArr);
// console.log(maxIndex,minIndex);

// 差值法

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxprofit = 0; // 最大收益
    let minPrice = Infinity;  // 提前设置一个比数组中任何一个元素都大的数
    for(let i = 0; i < prices.length; i++){
        if( prices[i] < minPrice ){
            minPrice = prices[i];
        }
        if((prices[i] - minPrice )> maxprofit){
            maxprofit = prices[i] - minPrice;
        }
    }
    return maxprofit;
};


var prices = [7, 1, 5, 3, 6, 4];
var prices2 = [7, 6, 4, 3, 1];
var prices3 = [2, 1, 4];
var prices4 = [2, 4, 1]

var prices5 = [3,2,6,5,0,3];
console.log(maxProfit(prices));
console.log(maxProfit(prices5));


