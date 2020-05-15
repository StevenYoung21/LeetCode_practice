/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
    let list = [];
    let a = 'Push',
        b = 'Pop';
    let endArr = [];

    for (let i = 0; i < n; i++) {
        list[i] = i + 1;
    }

    let i = 0;
    let j = 0;

while( i < list.length && j < target.length )
{

    if ( list[i] == target [j]){
               endArr.push(a);
               i++;
               j++;
           }else{
               endArr.push(a);
               endArr.push(b);
               i++;
        }
}

    return endArr;

};

var target = [2,3,4];
var n = 4;

console.log(buildArray(target, n));