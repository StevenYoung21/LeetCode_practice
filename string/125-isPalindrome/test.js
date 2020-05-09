
var isPalindrome = function(s) {
    return s.toString().toLocaleLowerCase().split('').filter(
        (e) => (e.charCodeAt()>=48) &&(e.charCodeAt()<=57) || (e.charCodeAt()>=65) && (e.charCodeAt() <= 122)
    ).filter((e) => e != '`')
    }

var arr = "`l;`` 1o1 ??;l`";
console.log(isPalindrome(arr));