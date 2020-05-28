/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {

    let reg1 = /^[0-9]\d*$/;
    let reg2 = /^[a-zA-Z\d]+$/;

    let stack1 = [];
    let stack2 = [];
    let num = 0;
    let str = '';

    for( let i = 0; i < s.length; i++ ){
        
        if( reg1.test(s[i]) ){
            num = num*10 + Number(s[i]) ;
        } else if( reg2.test(s[i]) ){
            str = str + s[i];
        }else if( s[i] === '[' ){
            stack1.push(num);
            num = 0;
            stack2.push(str);
            str = '';
        }else if( s[i] === ']' ){
            let repeatTimes = stack1.pop();
            str = stack2.pop() + str.repeat(repeatTimes);
        }

    }

    return str;

};

var s = "10[a]2[bc]";
console.log(decodeString(s));