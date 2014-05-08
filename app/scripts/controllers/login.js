'use strict';

var app = angular.module('uniSpyApp');


app.factory('Auth', function($http){
    var URL = 'http://unispy-backend.herokuapp.com/session';
    var service = {};

    service.logged = {};

    service.login = function(credentials) {
      console.log("Logging in :D")
      return $http.post(URL, credentials).then(
        function (token) {
          service.logged.status = true;
          service.logged.user = credentials.user;
          $http.defaults.headers.common['auth-token'] = token.data;
          return token.data;
        }
      )
    }

    service.logout = function(credentials) {
      return $http.delete(URL).then(
        function () {
          service.logged.status = false;
          service.logged.user = null;
          delete $http.defaults.headers.common['auth-token']
          return null;
        }
      )
    }

    return service;
});


angular.module('uniSpyApp')
  .controller('LoginCtrl', function ($scope, Auth) {
  	  $scope.isCollapsed = true;

  	  $scope.login = function (){
  	  	console.log("BOOO!½");
  	  	Auth.login($scope.credentials)
	      .then(
	        function(data) {
	          // success
	        },function( data ) {
	          // failure
	        }
	      );
	      $scope.credentials = {}
  	  }
  });