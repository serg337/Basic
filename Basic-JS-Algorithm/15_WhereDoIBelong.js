function getIndexToIns(arr, num) {
    var arr2 = arr.sort(function(a,b){
        return a - b;
    });
    var index = 0;
    for (i = 0; i < arr2.length; i++){
        if (arr2[i] - num < 0){
            index++;
        }
    }
    return index;
}
