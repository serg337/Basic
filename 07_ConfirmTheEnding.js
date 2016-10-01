function confirmEnding(str, target) {
    var strWhite = str.replace(/ /g,'');
    if (target === strWhite.substring(strWhite.length - target.length)){
        return true;
    } else {
        return false;
    }
}