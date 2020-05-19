/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {

    let reg = /[A-Z]/;

    let str2 = [];
    let arr = new Array;
    arr = str.split('');

    for( let i = 0; i < arr.length; i++){
        if( reg.test(arr[i]) ){
            str2.push( String.fromCharCode(str[i].charCodeAt()+32) );
        }else{
            str2.push(arr[i]);
        }
    }

    return str2.join('');


};

var str = "Hello";
console.log(toLowerCase(str));