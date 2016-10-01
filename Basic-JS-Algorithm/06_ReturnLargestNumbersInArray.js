function largestOfFour(arr) {
    var largeArray = [];
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            largeArray.push(Math.max.apply(null, arr[j]));
        }
        return largeArray; 
    }
}
