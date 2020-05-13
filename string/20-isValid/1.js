/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    let i = 0;
    let len = s.length;

    let stack = [];
    let arr = s.split('');

    while(len != 0){
        if (arr[i] == '(' || arr[i] == '{' || arr[i] == '['){
            stack.push(arr[i]);
            i++;
            len--;
        }
        else if( arr[i] == ')' ){
            if(stack[stack.length - 1] != '(') return false;
            else{
                stack.pop();
                i++;
                len--;
            }
        }
        else if( arr[i] == ']' ){
            if(stack[stack.length - 1] != '[') return false;
            else{
                stack.pop();
                i++;
                len--;
            }
        }
        else if( arr[i] == '}' ){
            if(stack[stack.length - 1] != '{') return false;
            else{
                stack.pop();
                i++;
                len--;
            }
        }
    }

    if(stack.length == 0){
        return true;
    }else{
        return false;
    }
    // return stack;
};

var arr1 = "()";
console.log(isValid(arr1));