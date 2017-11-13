'use strict';

angular.module('myWebStoreApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Controller'
  });
}])

.controller('View1Controller', [function(){

}]);