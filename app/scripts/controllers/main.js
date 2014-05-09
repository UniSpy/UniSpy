'use strict';



angular.module('uniSpyApp')
  .controller('MainCtrl', function ($scope, $http, $filter) {

    $scope.days = ["Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai", "Sunnuntai"]
    
    var d = new Date();
    $scope.today = d.getDay() - 1;
    //$scope.today = 1;

    $http.get('http://unispy-backend.herokuapp.com/menus.json').success( function(data, status, headers, config) {
      $scope.entries = data;
    });

    $http.get('http://unispy-backend.herokuapp.com/tags.json').success( function(data, status, headers, config) {
      $scope.tags = new Array();
      for (var i in data) {
        $scope.tags.push(data[i].content);
      }
    });

    $scope.taggedOnly = false;

    $scope.shouldDisplay = function(meal) {
      return !$scope.taggedOnly || $scope.isTagged(meal);
    }
 
    $scope.toggleTagged = function() {
      $scope.taggedOnly = !$scope.taggedOnly;
    }

    $scope.hasMeals = function(entry) {
      return !!entry.length;
    };

    $scope.onlyUnicafe = function(entry) {
      if (entry === undefined) return false;
      return entry.name.indexOf("Unicafe") > -1;
    };

    $scope.onlyUnicafeWithFinnishMeals = function(entry) {
      return $scope.onlyUnicafe(entry) && entry.meals.fi.length > 0;
    }

    $scope.isTagged = function(ruoka) {
      for (var tag in $scope.tags) {
        //console.log($scope.recommendations[tagi]);
        if (ruoka.toLowerCase().indexOf($scope.tags[tag].toLowerCase()) > -1) return true;
      }
      return false;
    };
  });