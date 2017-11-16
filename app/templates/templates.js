
angular.module('templateStore.templates', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){  
  $routeProvider
      .when('/templates', {
        templateUrl: 'templates/templates.html',
        controller: 'TemplateController'
      }).when('/templates/:templateId', {
        templateUrl: 'templates/template-details.html',
        controller: 'TemplateDetailsController'
      })
}])

/* *********** Template Controller ************ */
.controller('TemplateController', ['$scope', '$http', function($scope, $http){
  $scope.templates = [];
    $http.get('json/templates.json').then(function (response){
      console.log("This is the json file with templates: ", response.data);
      $scope.templates = response.data;
      return response.data;
      
    }).catch(function(error){
        console.log("this is the error: ", error);
        alert("Things didn't go well with this GET request. You'll have to try it again.");
          
    });
}]) 


.controller('TemplateDetailsController', ['$scope','$routeParams','$http','$filter', function($scope, $routeParams, $http, $filter) {
    $scope.templates = [];
    var templateId = $routeParams.templateId;
    console.log("this is routeParams.templateId: ", $routeParams.templateId);
    $http.get('json/templates.json').then(function  (response){
        console.log("Inside the template details controller. Got this data: ", response.data);
        $scope.template = $filter('filter')(response.data, function(d){
        return d.id == templateId;
        })[0];
        
        $scope.mainImage = $scope.template.images[0].name;
        console.log("Trying to find main image: " ,$scope.template.images[0].name);
    });
      $scope.setImage = function(image){
        $scope.mainImage = image.name;
        }
  }]); 

/* $filter is an angular provided service, so it has to be injected       into the controller dependency.
  - $filter is the service.
  -('filter') is the filter name. 'filter' is a horrible name for a filter name. 
  - data in the expression: $filter('filter')(data, function(d) is what the filter filters or orders or changes to uppercase, etc. 
  - function(d) in the expression: $filter('filter')(data, function(d) 
  -It is being used to filter the data.id of the image on the details page (where the user has gone to get more details about a particular image). 
  -The $filter method has a callback function that takes a parameter of d (for the data object of all the images).
  -"return d.id" returns the data with the specified id.  
  -That is then compared or checked against ***?????****
  -

  - $scope.MainImage = $scope.template.images[0].name; identifies the current image on the details page. 
  -It will be used on the template-details.html page to pull the image for the "Details" button that has been clicked.
  
  ******** $filter ********
  -$filter is filtering the data in an array of objects (the json file of templates that $http fetches).
  - "d" is actually the object taken from data (array of template objects - the same json file that $http.get fetches) one by one.
  - d is then passed into the function for further processing. 

*/ 
//console.log("This is the data and images: ", data);  
