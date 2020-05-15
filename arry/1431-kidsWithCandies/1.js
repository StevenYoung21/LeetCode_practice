/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {

    let res = [];
    let arr = new Array;
    arr = candies.map( e => e + extraCandies);

    for ( let i = 0; i < arr.length; i++){
        let len = candies.length;
        let j = 0;
        while( len > 0){
            if( arr[i] >= Math.max(...candies) ){
                res.push(true);
                break;
            }
            else if( arr[i] < candies[j] ){
                res.push(false);
                break;
            }else{
                j++;
                len--;
            }
        }
    }
    return res;
};

var candies = [12,1,12];
var  extraCandies = 1;

console.log(kidsWithCandies(candies,extraCandies));