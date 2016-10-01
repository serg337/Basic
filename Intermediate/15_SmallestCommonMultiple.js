function smallestCommons(arr) {
    var range = [];
    var arr1 = arr.sort();
    for (var i = 0; i <= (arr1[1]-arr1[0]); i++){
        range.push(arr1[0]+i);
    }
    function gcdFunc(inp1,inp2) {
        if (inp2 === 0) {
            return inp1;
        } else {
            return gcdFunc(inp2, inp1 % inp2);
        }
}
    var lcm = range[0];
    for (var j = 1; j < range.length; j++) {
        var gcd = gcdFunc(lcm, range[j]);
        lcm = (lcm * range[j])/ gcd;
    }
    return lcm;
}
