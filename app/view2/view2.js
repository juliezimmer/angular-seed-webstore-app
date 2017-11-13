'use strict';

angular.module('myWebStoreApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/view2', {
      templateUrl: 'view2/view2.html',
      controller: 'View2Controller'
  });
}])

.controller('View2Controller', [function(){

}]);