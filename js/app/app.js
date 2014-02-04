'use strict';

/* App Module */

var app = angular.module('app', [
  'ngRoute',

  'appControllers',
  'appServices'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/partials/home.html',
        controller: 'HomeCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);