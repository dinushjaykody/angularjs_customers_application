(function(){

    var app = angular.module('directiveModule', []);

    app.directive('helloWorld', function(){
        return {
            template: 'Hello World Dinush Buddy'
        };
    });

}());