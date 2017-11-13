'use strict';

describe('myWebStoreApp.version module', function(){
  beforeEach(module('myWebStoreApp.version'));

  describe('version service', function(){
    it('should return current version', inject(function(version){
      expect(version).toEqual('0,1');
    }));
  });
});