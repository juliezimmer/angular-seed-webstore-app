'use strict';

describe('myWebStoreApp.template module', function(){
  beforeEach(module('myWebStoreApp.template'));

  describe('interpolate filter', function() {
    beforeEach(module(function($provide) {
      $provide.value('template','TEST_TEMPLT');
    }));

    it('should replace TEMPLATE', inject(function(interpolateFilter){
      expect(interpolateFilter('before %TEMPLATE% after')).toEqual('before TEST_TEMPLT after');
    }));
  });
});
  
