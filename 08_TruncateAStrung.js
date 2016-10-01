function truncateString(str, num) {
    var dots = "...";
    if (num < dots.length) {
        return str.slice(0, num).concat(dots);
    } else if (str.length <= num){
        return str;
    } else {
        return str.slice(0, num-dots.length).concat(dots);
    }
}