
var a = [7,1,5,3,6,4];

var maxArr = Math.max(...a);  
var minArr = Math.min(...a);

// console.log(max,min);

var maxIndex = a.indexOf(maxArr);
var minIndex = a.indexOf(minArr);
// console.log(maxIndex,minIndex);

if(maxIndex > minIndex)
{
    console.log(0) ;
}else{
    console.log(minIndex+1) ;
}