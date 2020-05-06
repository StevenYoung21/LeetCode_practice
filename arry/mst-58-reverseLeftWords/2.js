/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    let len = s.length;
    let arr1 = [] ;
    let arr2 = [];
    
    for (let i = 0; i < n; i++){
        arr1.push(s[i]);
    }
    for (let j = n; j < len; j++){
        arr2.push(s[j]);
    }

let arr3 = arr2.join('') + '' + arr1.join('');

    return arr3;

};
    
    var str = 'lrloseumgh';
    var k = 6;
    console.log(reverseLeftWords(str,k));