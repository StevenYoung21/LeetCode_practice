/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
    
    if( a.toString() == b.toString() ) return -1;

    if( a.length >= b.length  ) 
    {
        return a.length;
    }
    else{
        return b.length;
    }

};

let a = 'aba';
let b = 'cdc';

console.log(findLUSlength(a,b));