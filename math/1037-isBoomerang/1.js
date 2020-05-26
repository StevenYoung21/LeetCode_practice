/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {

    let a = 0;
    let b = 0;
    let c = 0;

    if( points[0].toString() == points[1].toString() ||
        points[2].toString() == points[1].toString() ||
        points[2].toString() == points[0].toString()
    ) return false;

    a = (points[1][1] - points[0][1]) / (points[1][0] - points[0][0]);
    b = (points[2][1] - points[0][1]) / (points[2][0] - points[0][0]);
    c = (points[2][1] - points[1][1]) / (points[2][0] - points[1][0]);

    if( a == b || a == c || b == c){
        return false;
    }else{
        return true;
    }

    
  
};

var points =[[1,0],[1,0],[1,0]]
console.log(isBoomerang(points));