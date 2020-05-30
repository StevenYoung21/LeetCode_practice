
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {

    let F = [];
    let c = coins;
    let a = amount;
    F[0] = 0;

    for( let j = 1; j <= a; j++){  // j 为当前要换的总金额
        F[j] = Infinity;

        for ( let i = 0; i < c.length; i++ ){  // c[i] 是有的硬币种类

            if( j - c[i] >= 0  ){
                F[j] = Math.min( F[j], F[j-c[i]]+1 );
            }

        }

    }

    if( F[a] == Infinity ) return -1;

    return F[a];

};


var coins = [1, 2, 5];
var amount = 11;

console.log(coinChange(coins, amount));