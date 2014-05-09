'use strict';

var app = angular.module('uniSpyApp');



app.factory('Auth', function($http){
	var URL = 'http://unispy-backend.herokuapp.com/session';
	var service = {};

	service.logged = {};

	service.login = function(credentials) {
		console.log("Logging in :D");
		return $http.post(URL, credentials).then(
			//console.log("then!");
			function (token) {
				console.log("then..");
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
.controller('LoginCtrl', function ($scope, $modal, Auth) {

	$scope.credentials = {};
	$scope.loggedIn = Auth.logged;

	$scope.login = function (){
		console.log($scope.credentials);
		Auth.login($scope.credentials)
		.then(
			function(data) {
				console.log("login success!");
				$scope.$close();
				console.log("login success2!");
	          // success
	      },function( data ) {
	      	console.log("login fail!");
	      	$scope.$close();
	          // failure
	      }
	      );
		$scope.credentials = {}
	}

	$scope.open = function () {
		console.log("BLAA!");
		$modal.open({
			templateUrl: 'views/login.html',
			controller: 'LoginCtrl',
			size: 'sm',
		});
	};
});