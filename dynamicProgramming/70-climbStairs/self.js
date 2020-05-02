function steps(num){
    if( num <=2 )
    return num;
    else{
        return steps(num-1)+steps(num-2);
    }
}
console.log(steps(7));
