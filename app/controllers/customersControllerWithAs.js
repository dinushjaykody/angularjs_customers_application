//function CustomersController() {
//    this.sortBy = 'name';
//    this.reverse = false;
//
//    this.customers= [{joined: '2000-12-02', name:'John', city:'Chandler', orderTotal: 9.9956}, {joined: '1965-01-25',name:'Zed', city:'Las Vegas', orderTotal: 19.99},{joined: '1944-06-15',name:'Tina', city:'New York', orderTotal:44.99}, {joined: '1995-03-28',name:'Dave', city:'Seattle', orderTotal:101.50}];
//    this.doSort = function(propName) {
//        this.sortBy = propName;
//        this.reverse = !this.reverse;
//    };
//}



(function() {

    var CustomersController = function () {
        this.sortBy = 'name';
        this.reverse = false;

        //$scope.customers= [{joined: '2000-12-02', name:'John', city:'Chandler', orderTotal: 9.9956}, {joined: '1965-01-25',name:'Zed', city:'Las Vegas', orderTotal: 19.99},{joined: '1944-06-15',name:'Tina', city:'New York', orderTotal:44.99}, {joined: '1995-03-28',name:'Dave', city:'Seattle', orderTotal:101.50}];

        this.customers = [
            {joined:'2000-12-02',   name:'Dinush',    city:'Melbourne',   orderTotal:'10.999'},
            {joined:'2009-12-02',   name:'Hashi',     city:'Melbourne',   orderTotal:'12.000'},
            {joined:'2000-12-02',   name:'Tom',       city:'Perth',       orderTotal:'15.999'},
            {joined:'2008-12-02',   name:'Mike',      city:'Sydney',      orderTotal:'17.999'},
            {joined:'2000-12-02',   name:'Mila',      city:'Melbourne',   orderTotal:'18.0'},
            {joined:'2000-12-02',   name:'Mark',      city:'Melbourne',   orderTotal:'20.222'},
            {joined:'1998-12-02',   name:'Dan',       city:'Darwin',      orderTotal:'10.999'},
            {joined:'1993-12-02',   name:'Kelly',     city:'Melbourne',   orderTotal:'10.999'},
            {joined:'1998-12-02',   name:'Mina',      city:'Melbourne',   orderTotal:'10.999'},
            {joined:'2003-12-02',   name:'Jay',       city:'Mumbai',      orderTotal:'10.999'},
            {joined:'2000-12-07',   name:'Ron',       city:'Melbourne',   orderTotal:'23.999'},
            {joined:'2008-10-02',   name:'Tim',       city:'Melbourne',   orderTotal:'15.999'},
            {joined:'2012-12-12',   name:'William',   city:'Colombo',     orderTotal:'19.999'}
        ];


        this.doSort = function(propName) {
            this.sortBy = propName;
            this.reverse = !this.reverse;
        };
    };

    CustomersController.$inject = ['$scope'];

    angular.module('customersApp')
        .controller('CustomersController', CustomersController);

}());