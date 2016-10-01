function pairElement(str) {
    var holdArray = [];
    var str1 = str.split("");
    for (var i = 0; i < str1.length; i++) {
        if (str1[i] === "A") {
            holdArray.push(["A","T"]);
        } else if (str1[i] === "T"){
            holdArray.push(["T","A"]);
        } else if (str1[i] === "C") {
            holdArray.push(["C","G"]);  
        } else {
            holdArray.push(["G","C"]);
        }
    }
    return holdArray;
}
