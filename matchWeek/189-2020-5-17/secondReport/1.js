/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function(text) {

    let arr = [];
    arr = text.toLocaleLowerCase().split(' ');

    let len = arr.map(e=>e.length);

    let temp = '';

    let tempLen = 0;
    
    for(let i = 0; i < arr.length - 1 ; i++){
        for(let j = 0; j < arr.length - i -1 ; j++){

            if (len[j] > len[j + 1]) {
                 temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;

                tempLen = len[j];
                len[j] = len[j+1];
                len[j+1] = tempLen;
            }
        }
        
    }
    let endArr = [];
    endArr = arr.join(' ');
    

    return endArr.charAt(0).toUpperCase() + endArr.slice(1);

}

var text = "To be or not to be";
console.log(arrangeWords(text));