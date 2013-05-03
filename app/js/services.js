'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', ['ngResource']).
  // first factory has hardcoded data
  factory('ThingOne', function($resource){
    return $resource('data/data_sample.json', {},{
      get: {method: 'GET', isArray:true}
   });
  }).
  // second factory hasa  fileName parameter we can pass in
  factory('ThingTwo', function($resource){
    return $resource('data/:fileName.json', {},{
      get: {method: 'GET', isArray:true}
    });
  });
