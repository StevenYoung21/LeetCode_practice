/**
 * @author steven
 * @date 2020-4-17
 * @func 爬楼梯算法
 * @param {*type number }  n
*/

var climbStairs = function(n) {
    if(n >= 40) throw new Error('内存会溢出');
    
    if(n == 1 ) return 1;
    if(n == 2 ) return 2;
    return climbStairs(n-1) + climbStairs(n-2);
};
console.log(climbStairs(45));