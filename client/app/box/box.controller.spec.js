'use strict';

describe('Controller: BoxCtrl', function () {

  // load the controller's module
  beforeEach(module('endApp'));

  var BoxCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BoxCtrl = $controller('BoxCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
