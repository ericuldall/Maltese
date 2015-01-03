var Maltese_File_Autoload = function(File){
    var _load = (function(){
        var element = document.createElement("script");
        element.src = _path(File);
        document.body.appendChild(element);

        try{
            while(eval('typeof ' + _object(File) + ' === "undefined"')){
                console.log('Waiting on '+_object(File)+'...');
            }
        }catch(e){
            return e;
        }
        //we assume this will work,
        //otherwise will be handled by exception handling
        return true;

    })();

    var _path = (function(File){
        return File.split('_').join('/')+'.js';
    })(File);

    var _object = (function(File){
        var arr = File.split('_');
        return arr[arr.length - 1];
    })(File);

    return new Promise(function(resolve, reject){
        var loaded = _load();
        if( loaded === true ){
            resolve(_object(File));
        }else{
            reject(loaded);
        }
    });
};
