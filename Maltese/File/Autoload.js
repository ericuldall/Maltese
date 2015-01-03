var Maltese_File_Autoload = function(File){
    this.File = File;

    var _this = this;
    
    var _load = (function(){
        var element = document.createElement("script");
        element.src = _path(_this.File);
        document.body.appendChild(element);

        try{
            while( typeof eval(_object(_this.File)) === "undefined" ){
                console.log('Waiting on '+_object(_this.File)+'...');
                event.update(_this.Status);
            }
        }catch(e){
            return false;
        }
        //we assume this will work,
        //otherwise will be handled by exception handling
        event.update(_this.Status);

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
        if( _load() ){
            resolve(_object(_this.File));
        }else{
            reject(e);
        }
    });
};
