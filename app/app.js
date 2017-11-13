'use strict';

//Declare app level modules here; depends on views and components

angular.module('myWebStoreApp', ['ngRoute', 'myWebStoreApp.view1','myWebStoreApp.view2', 'myWebStoreApp.template'])

.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider){
  $locationProvider.hashPrefix('!');

  $routeProvider
    .otherwise({
        redirectTo: '/view1'
    });
}]);
