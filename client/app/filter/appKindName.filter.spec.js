'use strict';

describe('Filter: appKindName', function () {

  // load the filter's module
  beforeEach(module('endApp'));

  // initialize a new instance of the filter before each test
  var appKindName;
  beforeEach(inject(function ($filter) {
    appKindName = $filter('appKindName');
  }));

  it('should return the input prefixed with "appKindName filter:"', function () {
    var text = 'angularjs';
    expect(appKindName(text)).toBe('appKindName filter: ' + text);
  });

});
