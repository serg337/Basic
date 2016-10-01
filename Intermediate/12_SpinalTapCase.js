function spinalCase(str) { 
    return str.split(/[\s_\-]|(?=[A-Z])/).join("-").replace(/[A-Z]/g, function(k){
        return k.toLowerCase();
    });
}
