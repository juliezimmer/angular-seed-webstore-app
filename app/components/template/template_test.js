'use strict';

describe('myWebStoreApp.template module', function(){
  beforeEach(module('myWebStoreApp.template'));

  describe('template service', function(){
    it('should return current template', inject(function(template){
      expect(template).toEqual('0,1');
    }));
  });
});