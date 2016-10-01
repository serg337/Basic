function convertHTML(str) {
    var entObj = {
        "'" : "&apos;",
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        '"': "&quot;"
    };
    var retStr = str.replace(/[&"<>']/g, function(key){
        return entObj[key];
    });
    return retStr;
}
