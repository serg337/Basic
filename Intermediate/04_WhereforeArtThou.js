function whatIsInAName(collection, source) {
    var sourceArr = Object.keys(source);
    return collection.filter(function (e) {
       return sourceArr.every(function (key){
          return e[key] === source[key]; 
       }); 
    });
}
