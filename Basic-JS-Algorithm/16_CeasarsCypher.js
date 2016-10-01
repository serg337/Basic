function rot13(str) {
    var alph =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F', 'G','H','I','J','K','L','M'];
    var str2 = [];
    for( var i = 0; i < str.length; i++){
        if(alph.indexOf(str[i]) === -1){
            str2.push(str[i]);
        }else{
            var j = alph.indexOf(str[i]) + 13;
            str2.push(alph[j]);
        }
    }
return str2.join("");
}
