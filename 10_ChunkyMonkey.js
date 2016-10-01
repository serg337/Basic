function chunkArrayInGroups(arr, size) {
    var arr2 = [];
    for (i = 0; i < arr.length; i+=size) {
        arr2.push(arr.slice(i, i+size));    
    }
    return arr2 ;
}