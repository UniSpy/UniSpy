'use strict';

angular
  .module('uniSpyApp', [
    'ngResource', 'ui.bootstrap'
  ]);

 var app = angular.module('uniSpyApp', []);

app.config(function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
