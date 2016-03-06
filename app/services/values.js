angular.module('customersApp').value('appSettings',{
    title: 'Angular JS Customers applications',
    version: '1.0 v'
});



//DIFFERENT BETWEEN THESE TWO IS THAT CONSTANT CAN BE USED TO INJECT TO THE CONFIG BUT VALUE CANT

//angular.module('customersApp').constant('appSettings',{
//    title: 'Angular JS Customsers applications',
//    version: '1.0'
//});
