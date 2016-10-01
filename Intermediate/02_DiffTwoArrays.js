function diffArray(arr1, arr2) {
    var arr3 = arr1.filter(function (e){
       return arr2.indexOf(e) === -1; 
    });
    var arr4 = arr2.filter(function (e){
       return arr1.indexOf(e) === -1; 
    });
    var newArr = arr3.concat(arr4);
    console.log(newArr);
    return newArr;
}
