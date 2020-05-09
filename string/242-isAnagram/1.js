
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    // if(s.length != t.length) return false;
    // let arr1 = s.split('').sort().join('');
    // let arr2 = t.split('').sort().join('');
    
    // if (arr1 === arr2) {
    //     return true;
    // }else{
    //     return false;
    // }

    return s.split('').sort().join('') === t.split('').sort().join('');


};

var arr1 = 'anagram';
var arr2 = 'nagaram';

// isAnagram(arr1,arr2);
console.log(isAnagram(arr1,arr2));