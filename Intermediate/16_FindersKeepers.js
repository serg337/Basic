function findElement(arr, func) {
        var newArr = arr.filter(func);
        if  (newArr.length < 1) {
            return undefined;
        } else {
            return newArr[0];
        }
}
