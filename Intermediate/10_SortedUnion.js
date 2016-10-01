function uniteUnique(arr) {
    var concArr = Array.from(arguments).reduce(function (a,b){
        return a.concat(b);
    });
    var final = [];
    for (var i = 0; i < concArr.length; i++) {
        if (final.indexOf(concArr[i]) == -1) {
            final.push(concArr[i]);
        }
    }
    return final;
}
