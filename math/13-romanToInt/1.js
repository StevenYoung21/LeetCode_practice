
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    let num = 0;
    // let arr1 = ['I',' V',' X',' L','C','D','M']
    // let arr2 = [1,5,10,50,100,500,1000];

    // if( s === 'IV' ) return 4;    //    a
    // if( s === 'IX' ) return 9;    //    b  
    // if( s === 'XL' ) return 40;   //    c
    // if( s === 'XC' ) return 90;   //    d   
    // if( s === 'CD' ) return 400;  //    e  
    // if( s === 'CM' ) return 900;  //    f 

    // let arr =  s.split('').map((e)=>{
    //     if(e==='I') return 1;
    //     if(e==='V') return 5;
    //     if(e==='X') return 10;
    //     if(e==='L') return 50;
    //     if(e==='C') return 100;
    //     if(e==='D') return 500;
    //     if(e==='M') return 1000;

    // });

   
        let arr1 = '';
        arr1 = s.replace(/IV/g,'a',).replace(/IX/g,'b').replace(/XL/g,'c')
        .replace(/XC/g,'d').replace(/CD/g,'e').replace(/CM/g,'f');

       let arr2  =  arr1.split('').map((e)=>{
            if(e==='I') return 1;
            if(e==='V') return 5;
            if(e==='X') return 10;
            if(e==='L') return 50;
            if(e==='C') return 100;
            if(e==='D') return 500;
            if(e==='M') return 1000;
            if( e === 'a' ) return 4;    //    a
            if( e === 'b' ) return 9;    //    b  
            if( e === 'c' ) return 40;   //    c
            if( e === 'd' ) return 90;   //    d   
            if( e === 'e' ) return 400;  //    e  
            if( e === 'f' ) return 900;  //    f 
        })

        // let sum1 = 0;
        // for ( let i = 0; i < arr2.length; i++ ){
        //     sum1 = sum1 + arr2[i];
        // }
        return arr2.reduce((prev, next) => prev + next);
    
};

var arr = "IV";
var arr2 = "MCMXCIV";

console.log(romanToInt(arr2));

