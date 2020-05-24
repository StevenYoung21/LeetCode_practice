/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {

    let arr1 = sentence.split(' ');
    let arr2 = arr1.map(e => e[0]);
    let arr3 = searchWord.split('');

    if( !arr2.includes(searchWord[0]) ) return -1; 

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr3.length; j++){
            if( arr1[i][j] != arr3[j]){
                break;
            }else{
                if(!arr1[i].includes(searchWord)){
                    break;
                }else{
                    return i + 1;
                }
            }
        }
        

    }
    return -1;
};


var sentence ="dumb dream duck duck i";
var searchWord = "drea";

console.log(isPrefixOfWord(sentence, searchWord));
