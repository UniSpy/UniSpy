'use strict';

 //angular
 // .module('uniSpyApp', [
 //   'ngResource'
 // ]);

 var app = angular.module('uniSpyApp', ['ngResource', 'ui.bootstrap']);


//angular.module('uniSpyApp', ['ngResource', 'ui.bootstrap']);

app.config(function($httpProvider) {
	console.log("!!!1");
	console.log($httpProvider.defaults.headers);
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
