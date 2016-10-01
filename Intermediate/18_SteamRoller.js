function steamrollArray(arr) {
    return arr.reduce(function(a, b) {
        return a.concat(Array.isArray(b)? steamrollArray(b) : b);
    },[]);
}
