(function() {

    var app = angular.module('directiveModule');

    app.directive('sharedScope', function () {
        return {
            template: 'Name: {{customer.name}} Street: {{customer.street}}'
        };
    });

}());
