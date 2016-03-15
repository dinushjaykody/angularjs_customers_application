(function(){

    var app = angular.module('directiveModule');

    app.directive('isolateScopeWithString', function () {
        return {
            scope : {
              name:'@'
            },
            template: 'Name: {{name}}'
        };
    });

}());



//(function() {
//
//    var app = angular.module('directivesModule');
//
//    app.directive('isolateScopeWithString', function () {
//        return {
//
//            template: 'Name: {{name}}'
//        };
//    });
//
//}());
