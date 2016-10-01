function sumAll(arr) {
    arr = arr.sort(function (a, b) { return a-b;} );
    var finalSum = (arr[1] * (arr[1] + 1) / 2) - ((arr[0] - 1) * arr[0] / 2);
    console.log(finalSum);
    return finalSum;
}
