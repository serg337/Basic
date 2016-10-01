function truthCheck(collection, pre) {
    var cache = [];
    collection.forEach(function (item){
        for (var key in item){
            if(!item[key]){
                delete item[key];
            }
        }
    });
    collection.forEach(function (item){
        cache.push(item.hasOwnProperty(pre));
    }); 
    return cache.every(function (resp){
        if(resp === true){
            return true;
        } else {
            return false;
        }
    });
}
