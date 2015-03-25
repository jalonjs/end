'use strict';

describe('Controller: HandleCtrl', function () {

  // load the controller's module
  beforeEach(module('endApp'));

  var HandleCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HandleCtrl = $controller('HandleCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
