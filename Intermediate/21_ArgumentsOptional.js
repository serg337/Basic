function addTogether() {
    var argArray = Array.prototype.slice.call(arguments);
    argArray.some(function (item){
        if (typeof(item) !== "number") {
            return undefined;
        }         
    });
    if (argArray.length === 2){
        if (typeof(argArray[0]) !== "number" || typeof(argArray[1]) !== "number") {
            return undefined;
        } else {
            return argArray[0] + argArray[1];
        }
    }
    if (argArray.length === 1){
        if (typeof(argArray[0]) !== "number"){
            return undefined;
        } else {
            return function(arg2) {
                if(typeof(arg2) !== "number")
                    return undefined;
                else {
                    return argArray[0] + arg2;
                }
            }; 
        }
    }
}
