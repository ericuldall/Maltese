var Maltese_App = (function(){
    var App = this;
    //initialize app
    (function(){
        App.Request = new Maltese_Http_Request();
        App.Response = new Maltese_Http_Response();
        App.Router = new Maltese_Http_Router();
    })();

    return App;
})();
