// perm function
var perm = function(k) {
    
    let arr = ['0','1'];
    let b = Math.pow(2,k);
    let arr2 = [''];
    let flag = 1;
 
    for( let i = 0; i < b; i++){
     for(let j = 0; j < k; j++){
         if(flag == 1){
            arr2[i] += '0';
            flag = 0;
         }else{
            arr2[i] += '1';
            flag = 1;
         }
     }   
    }

    return arr2;
  };  

  var k = 3
  console.log(perm(k))