function findLongestWord(str) {
    var numArray = [];
    var strArray = str.split(" ");
    for ( i = 0; i < strArray.length ; i++) {
        numArray.push(strArray[i].length);
    }
    return Math.max.apply(null, numArray);
}
