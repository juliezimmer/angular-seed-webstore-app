'use strict';
angular.module('myWebStoreApp.template.interpolate-filter', [])

.filter('interpolate', ['template', function(template){
  return function(test){
    return String(text).replace(/\%TEMPLATE\%/mg,template);
  };
}]);