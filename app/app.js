'use strict';

//Declare app level modules here; depends on views and components

angular.module('templateStore', ['ngRoute', 'templateStore.view1','templateStore.view2', 'templateStore.templates'])

.config(['$routeProvider', function( $routeProvider){
  //$locationProvider.hashPrefix('!');

  $routeProvider.otherwise({
        redirectTo: '/templates'
    });
}]);

//The name of this app is being changed to "templateStore". 
/* myWebStoreApp.version (located in the dependencies for this app) was replaced with templateStore.templates.
myWebStore.version was only used to demo the angular-seed starter. */
//the .otherwise.redirectTo: was changed from '/view1' to '/templates'.