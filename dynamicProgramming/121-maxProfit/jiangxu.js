var arr = [7, 1, 5, 3, 6, 4];
var arr2 = [8, 6, 3, 1];

function jiangxu(arr) {
    var i = 0;
    if (arr[i] > arr[i + 1]) {
        i ++;
        return jiangxu(arr);
    }
    else {
        if (arr[i] == arr[i + 1])
            return true;
    }

}

}
console.log(jiangxu(arr));