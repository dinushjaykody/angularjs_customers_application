(function() {

    var app = angular.module('directiveModule');

    app.directive('isolateScopeWithObject', function () {
        return {

            scope: {
              datasource: '='
            },
            template: 'Name: {{datasource.name}} Street: {{datasource.street}}' +
            '<br /><button ng-click="datasource.name=\'Fred\'">' +
            'Change</button>'
        };
    });

}());
