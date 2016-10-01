function sumFibs(num) {
    var fibArray = [0,1];
    var sum = 0;
    for (var i = 0; i <num-1; i++){
        fibArray.push(fibArray[i] + fibArray[i+1]);
    }
    for (var j = 0; j < fibArray.length; j++)
        if (fibArray[j] <= num && fibArray[j] % 2) {
            sum = sum + fibArray[j];
        }
        return sum;
}
