// 暴力解法 

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxprofit = 0;
    for(let i = 0; i < prices.length; i++){
        let price1 = prices[i];
        for(let j = i + 1 ; j < prices.length; j++){
            let price2 = prices[j];
            if( (price2 - price1) > maxprofit){
                maxprofit = price2 - price1;
            }
            
        }
    }
return maxprofit;


};

var prices = [7,1,5,3,6,4];
var prices2 = [7,6,4,3,1];
var prices3 = [2,1,4];
console.log(maxProfit(prices3));