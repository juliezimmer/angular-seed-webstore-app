'use strict';

describe('myWebStoreApp.view1 module', function(){
  
  
  beforeEach(module('myWebStoreApp.view1'));

  describe('view1 controller', function(){

    it('dhould ....', inject(function($controller){

      var view1Controller = $controller('View1Controller');
      expect(view1Controller).toBeDefined();
    }));
  
  });
});