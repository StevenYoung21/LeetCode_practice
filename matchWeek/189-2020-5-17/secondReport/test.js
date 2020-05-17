var arr=[ 4, 4, 3, 4, 2];
//外层循环：控制比较轮数 从0开始，次数小于长度-1
for(var i=1;i<arr.length;i++){
    //内层循环：控制每轮比较次数  数组长度-i
    for(var j=0;j<arr.length-i;j++){
    //如果当前的元素(j)大于下一个元素(j+1)，则交换位置
        if(arr[j]>arr[j+1]){
            var t=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=t;
        }
    }
}

console.log(arr);