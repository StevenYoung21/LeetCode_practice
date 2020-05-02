    /**
     * @param {number} n
     * @return {boolean}
     */
    var isHappy = function(n) {

        let slow = Sum(n);
        let fast = Sum(slow);

        while (slow != fast){
            slow = Sum(slow);
            fast = Sum(Sum(fast));
        }

        return slow == 0;
    

    };

    function Sum(n){
        let i = 0;
        let nums = [];
        while(n>1){
            nums[i] =parseInt( n % 10);
            n = n / 10;
            i++;
        }    

        let sum = 0;
        for(let i = 0; i < nums.length; i++){
            sum = sum + nums[i]*nums[i];
        }
        return sum;
    }

console.log(isHappy(19));

