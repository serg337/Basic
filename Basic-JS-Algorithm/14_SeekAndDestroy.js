function destroyer(arr) {
    var arr1 = arr.slice.call(arguments);
    arr1.splice(0,1);
    return arr.filter(function(item) {
        return arr1.indexOf(item) === -1;
    });
}
