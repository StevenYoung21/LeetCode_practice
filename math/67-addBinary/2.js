/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    
    let aLen = a.length;
    let bLen = b.length;

    let dis = Math.abs(aLen-bLen);

    let arrA = a.split('').map(Number);
    let arrB = b.split('').map(Number);

    while(dis > 0){
        if(aLen>bLen){
            arrB.unshift(0);
            dis--;
        }else{
            arrA.unshift(0)
            dis--
        }

    }

    arrA.reverse();
    arrB.reverse();

    let i = 0;
    let endArr = [];
    let state = [0];

    while ( i < arrA.length && i < arrB.length){

        if(arrA[i]+arrB[i]+state < 2 ){
            endArr.push(0);
            i++;
        }else if (arrA[i]+arrB[i]+state == 2){
            endArr.push(0);
            state = [1];
            i++;
        }else{
            endArr.push(1);
            state = [1];
            i++;
        }
     
    }
    

    return [arrA,arrB,endArr];
  
};

var a = '11';
var b = '1';
console.log(addBinary(a,b));