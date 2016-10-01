function fearNotLetter(str) {
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) - str.charCodeAt(i+1) === -2)
            break;
    }
    if (str.charCodeAt(i) - str.charCodeAt(i+1) === -2 ) {
        return String.fromCharCode(str.charCodeAt(i) + 1);
    } else {
        return undefined;
    }
}
