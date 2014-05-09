'use strict';

angular.module('uniSpyApp')
  .controller('SideCtrl', function ($scope) {
    $scope.isCollapsed = true;

    $scope.tag = {};

    $scope.addTag = function(){
      $scope.tags.push($scope.tag.text);
      $scope.tag = {};
    };
    $scope.deleteTag = function(tag){
      $scope.tags.splice(tag,1);
    };
  });