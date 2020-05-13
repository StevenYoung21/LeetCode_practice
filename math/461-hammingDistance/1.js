/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {

    let arr1 = x.toString(2).split('');
    let arr2 = y.toString(2).split('');
    let len1 = arr1.length;
    let len2 = arr2.length;
    
    let dis = Math.abs(len1-len2);
    if(len1>len2){
        while(dis>0){
            arr2.unshift('0');
            dis--;
        }
    }else{
        while(dis>0){
            arr1.unshift('0');
            dis--;
        }
    }

    let hmDis = 0;
    let i = 0;
    while( i != arr1.length){
        if(arr1[i] != arr2[i]){
            hmDis++;
        }
        i++;
    }

    return hmDis;

};

var a = 1;
var b = 4;
console.log(hammingDistance(a,b));