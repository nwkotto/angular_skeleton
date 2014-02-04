'use strict';

/* Controllers */

var appControllers = angular.module('appControllers', []);

appControllers.controller('HomeCtrl', ['$scope', 'ModelType',
  function($scope, ModelType) {
    ModelType.query(function(objects) {
      console.log(objects);
    });

    $scope.test = "Sup";
  }]);