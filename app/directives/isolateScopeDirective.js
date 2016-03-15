(function() {

    var app = angular.module('directiveModule');

    app.directive('isolateScope', function () {
        return {

            scope: {},
            template: 'Name: {{customer.name}} Street: {{customer.street}}'
        };
    });

}());

