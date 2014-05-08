'use strict';

angular.module('uniSpyApp')
  .controller('SideCtrl', function ($scope) {
    $scope.isCollapsed = true;

    $scope.addTag = function(){
      console.log("BLAAAGT!");
    };
  });