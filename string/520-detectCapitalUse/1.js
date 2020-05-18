/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {

    let reg1 = /[A-Z]/;
    let reg2 = /[a-z]/;


    if(word.length == 1) return true;


    if(reg1.test(word[0])){

        if(reg1.test(word[1])){
            for(let i = 2; i < word.length; i++){
                if(reg2.test(word[i])){
                    return false;
                }
            }
            return true;
        }else{
            for(let i = 2; i < word.length; i++){
                if(reg1.test(word[i])){
                    return false;
                }
            }
            return true;
        }
        
    }else{
        for(let i = 1; i < word.length; i++){
            if(reg1.test(word[i])){
                return false;
            }
        }
        return true;
    }
    
};

var arr = 'USA';

console.log(detectCapitalUse(arr));