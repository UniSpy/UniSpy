'use strict';

angular.module('uniSpyApp')
  .controller('SideCtrl', function ($scope) {
    $scope.isCollapsed = true;

    $scope.tag = {};

    $scope.addTag = function(){
      if($scope.tags.indexOf($scope.tag.text) == -1){
        $scope.tags.push($scope.tag.text);
      }
      $scope.tag = {};
    };
    $scope.deleteTag = function(tag){
      $scope.tags.splice(tag,1);
    };
  });