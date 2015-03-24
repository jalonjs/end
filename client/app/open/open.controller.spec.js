'use strict';

describe('Controller: OpenCtrl', function () {

  // load the controller's module
  beforeEach(module('endApp'));

  var OpenCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OpenCtrl = $controller('OpenCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
