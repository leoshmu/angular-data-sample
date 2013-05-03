'use strict';

/* Controllers */

function MyController($scope, ThingOne, ThingTwo){
  $scope.dataOne = ThingOne.get();

    // get data with passed in parameter
  $scope.dataTwo= ThingTwo.get({fileName: "data_sample"});
}

/* The new seed has the structure below for the controllers but I can't figure out how to make it work yet
so I am sticcking to the code above, which is the old way!!
*/
// angular.module('myApp.controllers', []).
//   controller('MyController', [function($scope) {

//     // call service with hardcoded filename
//     $scope.dataOne = ThingOne.get();

//     // get data with passed in parameter
//     $scope.dataTwo= ThingTwo.get({fileName: "data_sample"});

//   }]);