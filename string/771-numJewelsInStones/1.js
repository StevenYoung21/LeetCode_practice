/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {

    let arr = J.split('');

    let num = 0;

    for( let i = 0; i < S.length; i++ ){

        for( let j = 0; j < arr.length; j++ ){

            if( S[i] == arr[j] ){
                num++;
            }

        }

    }

    return num;

};

let J = "z", S = "ZZ"
console.log(numJewelsInStones(J,S));