function mutation(arr) {
    var arr2 = arr[0].toLowerCase();
    var arr3 = arr[1].toLowerCase();
    for (var i = 0; i < arr3.length; i++) {
        if (arr2.indexOf(arr3[i]) < 0)
            return false;
    }
    return true;
}

function mutation(arr) {
    for (var i = 0; i < arr[1].toLowerCase().length;i++) {
        if (arr[0].toLowerCase().indexOf(arr[1].toLowerCase()[i]) < 0)
            return false;
    }
    return true;
}
