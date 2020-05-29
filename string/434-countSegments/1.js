/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    if ( s == '') return 0;
    
    s = s.trim();
    let a = s.split(' ')
    
    return a.filter(e => e!='').length;
};

var s = '", , , ,        a, eaefa"';

console.log(countSegments(s));