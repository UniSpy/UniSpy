'use strict';

angular.module('uniSpyApp')
  .controller('LoginCtrl', function ($scope, $modal) {
  	  $scope.isCollapsed = true;

  	  $scope.login = function (){
  	  	console.log("BOOO!½");
  	  }

  	  $scope.open = function () {
      console.log("BLAA!");
    var modalInstance = $modal.open({
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl',
      size: 'sm',
    });
  };
  });