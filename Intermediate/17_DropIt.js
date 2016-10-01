function dropElements(arr, func) {
    if (func(arr[0]) === false) {
        arr.shift();
        if (arr.length > 0) {
         return dropElements(arr, func);   
        } 
    } 
    return arr;
}
