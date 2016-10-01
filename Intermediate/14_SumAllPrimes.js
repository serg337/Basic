function sumPrimes(num) {
    var sum = 0;
    function chkPrime(inp) {
        if(inp < 2) return false;
        for (var i = 2; i < inp; i++) {
            if(inp % i === 0)
                return false;
        }
        return true;
    }
    for(var i = 0; i <= num; i++){
        if(chkPrime(i)) {
            sum = sum + i;
        }
    }
    return sum;
}
