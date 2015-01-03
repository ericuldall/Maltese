var Maltese = (function (Environments) {
    var App;

    var Error = {
        FATAL: {

        },
        WARNING: {

        }
    };

    if( typeof Environments === "undefined" ){
            var Environments = {
                DEVELOPMENT: {
                    "default": true,
                    "abbr": "dev",
                    "subdomain": "dev.",
                    "display_errors": true,
                    "error_threshold": "ALL"
                },
                PRODUCTION: {
                    "abbr": "prod",
                    "subdomain": "www.",
                    "display_errors": false,
                    "error_threshold": "FATAL"
                }
            };
    }
    for(var key in Environments){
        if( Environments[key].default === true ){
            var Environment = Environments[key];
            break;
        }
    }
 
    return {
        App: function () {
            if (!App) {
                App = new Maltese_App();
            }
            return App;
        },
        Environment: function(env){
            if( Environments.hasOwnProperty(env) ){
                Environment = Environments[env];
            }

            return Environment;
        }
    };
})(Environments);
