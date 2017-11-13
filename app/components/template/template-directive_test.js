'use strict';

describe('myWebStoreApp.template module', function(){
  beforeEach(module('myWebStoreApp.template'));

  describe('app-template directive', function() {
    it('should print current template', function(){
      module(function($provide) {
        $provide.value('template', 'TEST_TEMPLT');
      });
      inject(function($compile, $rootScope){
        var element = $compile('<span app-template></span>')($rootScope);
        expect(element.text()).toEqual('TEST_TEMPLT');
      });
    });
  });
});