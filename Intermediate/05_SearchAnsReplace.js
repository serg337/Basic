function myReplace(str, before, after) {
    var str1 = str.split(" "), indStr = str1.indexOf(before);
    if (/^[A-Z]/.test(str1[indStr])){
        var aft = after.split("");
        var upCase = aft[0].toUpperCase();
        var remLetter = aft.splice(0,1,upCase);
        var aft2 = aft.join("");
        var remove = str1.splice(indStr, 1, aft2);
        var str2 = str1.join(" ");
        return str2;
    } else {
        var remove2 = str1.splice(indStr, 1, after);
        var str3 = str1.join(" ");
        return str3;
    }   
}
