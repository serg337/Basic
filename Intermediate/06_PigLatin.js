function translatePigLatin(str) {
    for (var i = 0; i < str.length; i++){
        if(/[aeiou]/.test(str[i]))
            break;
    }
    var cut = str.substr(0,i-0);
    var leftOver = str.substr(i, str.length-1);
    if(/[aeiou]/.test(str[0])) {
        return str + "way";
    } else {
        return leftOver + cut + "ay";
    }
}
