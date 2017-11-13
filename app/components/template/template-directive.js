'use strict';

angular.module('myWebStoreApp.template.template-directive', [])

.directive('appTemplate', ['template', function(template){
  return function(scope, elm, attrs) {
    elm.text(template);
  };
}]);