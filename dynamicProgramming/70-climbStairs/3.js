// 优化楼梯算法
function f(n){
    const w = new Map(); //es6 新的数据类型 map  
    // if(n>=40) throw new Error('内存会溢出');
    if (n==1) return 1;
    if (n==2) return 2;
    if (w.has(n)){
        return w.get(n);
    }
    const ret = f(n-1)+f(n-2);
    w.set(n, ret);
    // console.log(n,'-----------');
    return ret;
}
console.log(f(40));