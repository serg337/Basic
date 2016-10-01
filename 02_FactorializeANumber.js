function factorialize(num) {
    if (num < 0) {
        return "It has to be a positive integer";
    } else {
        var  numFact = 1;
        for ( i = 2; i <= num ; i++) {
            numFact = numFact*i;
        }
        return numFact;
    }
}

// Unsing Recursion

function factorialize(num) {
    if (num < 0) {
        return "It has to be a positive integer";
    }
    if(num === 0){
        return 1;
    }
    return num * factorialize(num -1)
}