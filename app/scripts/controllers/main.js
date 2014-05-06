'use strict';

angular.module('uniSpyApp')
  .controller('MainCtrl', function ($scope, $http, $filter) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.days = ["Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai", "Sunnuntai"]
    

    $http.get('http://www.lounasaika.net/api/v1/menus.json').success( function(data, status, headers, config) {
      $scope.entries = data;
      if ($scope.tags !== undefined) {
        makeRecommedations();
      }
    });

    $http.get('http://unispy-backend.herokuapp.com/tags.json').success( function(data, status, headers, config) {
      $scope.tags = new Array();
      for (var i in data) {
        $scope.tags.push(data[i].content);
      }
      //$scope.tags = data;
      if ($scope.entries !== undefined) {
        makeRecommedations();
      }
    });



    function makeRecommedations() {
      //$scope.recommendations = $filter($scope.entries, )
      $scope.recommendations = angular.copy($scope.entries);
      for (var place in $scope.entries) {
        var currentPlace = $scope.entries[place];
        if (currentPlace.meals === undefined) {
          continue;
        }
        var allDaysDeleted = true;
        for (var day in currentPlace.meals.fi) {
          var currentDay = currentPlace.meals.fi[day];
          var allMealsdeleted = true;
          for (var meal in currentDay) {
            var currentMeal = currentDay[meal];
            if (!$scope.isTagged(currentMeal)) {
              delete $scope.recommendations[place].meals.fi[day][meal];
            } else {
              allMealsdeleted = false;
            }
          }
          if (allMealsdeleted) {
            delete $scope.recommendations[place].meals.fi[day];
          } else {
            allDaysDeleted = false;
          }
        }
        if (allDaysDeleted) {
          console.log("deleting empty place")
          delete $scope.recommendations[place];
        }
      }
      console.log($scope.recommendations);
    }

    $scope.onlyUnicafe = function(entry) {
      return entry.name.indexOf("Unicafe") > -1;
    };

    $scope.isTagged = function(ruoka) {
      for (var tag in $scope.tags) {
        //console.log($scope.recommendations[tagi]);
        if (ruoka.toLowerCase().indexOf($scope.tags[tag].toLowerCase()) > -1) return true;
      }
      return false;
    };

  });