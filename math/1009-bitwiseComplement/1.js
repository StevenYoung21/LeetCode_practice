/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {

    let a = N.toString(2).split('');

    for ( let i = 0; i < a.length; i++){
        if( a[i] == '0' ){
            a[i] = '1';
        }else{
            a[i] = '0';
        }
    }

    let b = 0;
    let len = a.length;
    let j = 0;
    while( len > 0){

        b = b + a[len-1] * Math.pow(2,j);
        len--;
        j++;
    }

    return b;

};

var N = 10;

console.log(bitwiseComplement(N));