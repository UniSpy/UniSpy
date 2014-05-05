'use strict';

angular.module('uniSpyApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    

    $http.get('menus.json').success( function(data, status, headers, config) {
        console.log(data)
        $scope.entries = data;
    });

    $scope.onlyUnicafe = function(entry) {
      console.log(this, arguments)
      console.log("auts")
      return entry.campus === "Kumpula";
    }

  });
