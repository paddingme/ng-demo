'use strict';

/**
* App Module
*
* Description
*/
var phonecatApp = angular.module('phonecatApp',[
    'ngRoute',
    'phonecatController'
]);


phonecatApp.config(['$routeProvider',function($routeProvider) {
    $routeProvider.
        when('/phones',{
            templateUrl: 'partials/phone-list.html',
            controller: 'phoneListController'
        }).
        when('/phones/:phoneId',{
            templateUrl: 'partials/phone-detail.html',
            controller: 'phoneDetailCtrl'
        }).
        otherwise({
            redirectTo: '/phones'
        });
}])
