'use strict';

angular.module('uniSpyApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.days = ["Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai", "Sunnuntai"]
    

    $http.get('menus.json').success( function(data, status, headers, config) {
      $scope.entries = data;
    });

    $http.get('recommendations.json').success( function(data, status, headers, config) {
      console.log(data);
      $scope.recommendations = data;
    });

    $scope.onlyUnicafe = function(entry) {
      return entry.name.indexOf("Unicafe") > -1;
    }

    $scope.isTagged = function(ruoka) {
      for (var tagi in $scope.recommendations) {
        //console.log($scope.recommendations[tagi]);
        if (ruoka.indexOf($scope.recommendations[tagi]) > -1) return true;
      }
      return false;
    }

  });