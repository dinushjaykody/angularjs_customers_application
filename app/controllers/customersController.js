//
//(function(){
//    var CustomersController = function ($scope) {
////        initilizing default values
//
//        $scope.sortBy = 'name';
//        $scope.reverse = false;
//
//        $scope.customeers = [
//            {joined:'2000-12-02',   name:'Dinush',    city:'Melbourne',   orderTotal:'10.999'},
//            {joined:'2009-12-02',   name:'Hashi',     city:'Melbourne',   orderTotal:'12.000'},
//            {joined:'2000-12-02',   name:'Tom',       city:'Perth',       orderTotal:'15.999'},
//            {joined:'2008-12-02',   name:'Mike',      city:'Sydney',      orderTotal:'17.999'},
//            {joined:'2000-12-02',   name:'Mila',      city:'Melbourne',   orderTotal:'18.0'},
//            {joined:'2000-12-02',   name:'Mark',      city:'Melbourne',   orderTotal:'20.222'},
//            {joined:'1998-12-02',   name:'Dan',       city:'Darwin',      orderTotal:'10.999'},
//            {joined:'1993-12-02',   name:'Kelly',     city:'Melbourne',   orderTotal:'10.999'},
//            {joined:'1998-12-02',   name:'Mina',      city:'Melbourne',   orderTotal:'10.999'},
//            {joined:'2003-12-02',   name:'Jay',       city:'Mumbai',      orderTotal:'10.999'},
//            {joined:'2000-12-07',   name:'Ron',       city:'Melbourne',   orderTotal:'23.999'},
//            {joined:'2008-10-02',   name:'Tim',       city:'Melbourne',   orderTotal:'15.999'},
//            {joined:'2012-12-12',   name:'William',   city:'Colombo',     orderTotal:'19.999'}
//        ];
//
//        $scope.doSort = function(propName) {
//            $scope.sortBy = propName;
//            $scope.reverse = !$scope.reverse;
//        };
//        console.log('sadfsja');
//        console.log($scope.customers);
//    }
//
//    CustomersController.inject = ['scope'];
//
//    angular.module('customersApp')
//        .controller('CustomersController',CustomersController);
//
//}());


//Option 1

/*app.controller('CustomersController', function ($scope) {
 $scope.sortBy = 'name';
 $scope.reverse = false;

 $scope.customers= [{joined: '2000-12-02', name:'John', city:'Chandler', orderTotal: 9.9956}, {joined: '1965-01-25',name:'Zed', city:'Las Vegas', orderTotal: 19.99},{joined: '1944-06-15',name:'Tina', city:'New York', orderTotal:44.99}, {joined: '1995-03-28',name:'Dave', city:'Seattle', orderTotal:101.50}];
 $scope.doSort = function(propName) {
 $scope.sortBy = propName;
 $scope.reverse = !$scope.reverse;
 };
 });*/

//Option 2

/*(function() {

 angular.module('customersApp')
 .controller('CustomersController', function ($scope) {
 $scope.sortBy = 'name';
 $scope.reverse = false;

 $scope.customers= [{joined: '2000-12-02', name:'John', city:'Chandler', orderTotal: 9.9956}, {joined: '1965-01-25',name:'Zed', city:'Las Vegas', orderTotal: 19.99},{joined: '1944-06-15',name:'Tina', city:'New York', orderTotal:44.99}, {joined: '1995-03-28',name:'Dave', city:'Seattle', orderTotal:101.50}];
 $scope.doSort = function(propName) {
 $scope.sortBy = propName;
 $scope.reverse = !$scope.reverse;
 };
 });

 }());*/

//Option 3

//INSTRUCTIONS TO USE SERVICES
//    IF YOU WANT TO USE THE SERVICE REPLACE THE CUSTOMERS FACTORY WITH CUSTOMERS SERVICE



(function() {

    var CustomersController = function ($scope, customersFactory, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        $scope.appSettings = appSettings;

        //$scope.customers= [{joined: '2000-12-02', name:'John', city:'Chandler', orderTotal: 9.9956}, {joined: '1965-01-25',name:'Zed', city:'Las Vegas', orderTotal: 19.99},{joined: '1944-06-15',name:'Tina', city:'New York', orderTotal:44.99}, {joined: '1995-03-28',name:'Dave', city:'Seattle', orderTotal:101.50}];


        function init() {
            customersFactory.getCustomers()
                .success(function(customers) {
                    $scope.customers = customers;
                })
                .error(function(data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });
        }

        init();
        $scope.doSort = function(propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };

        //To delete a customer
        $scope.deleteCustomer = function(customerId) {
            customersFactory.deleteCustomer(customerId)
                .success(function(status) {
                    if (status) {
                        for (var i=0,len=$scope.customers.length;i<len;i++) {
                            if ($scope.customers[i].id === customerId) {
                                $scope.customers.splice(i,1);
                                break;
                            }
                        }
                    }
                    else {
                        $window.alert('Unable to delete customer');
                    }

                })
                .error(function(data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });
        };

    };

    CustomersController.$inject = ['$scope', 'customersFactory','appSettings'];

    angular.module('customersApp')
        .controller('CustomersController', CustomersController);

}());