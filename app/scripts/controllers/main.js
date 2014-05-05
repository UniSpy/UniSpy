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
        console.log(data)
        $scope.entries = data;
    });

    $scope.onlyUnicafe = function(entry) {
      return entry.name.indexOf("Unicafe") > -1;
    }

  });
