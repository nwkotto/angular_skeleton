'use strict';

/* Services */

var appServices = angular.module('appServices', ['ngResource']);

appServices.factory('ModelType', ['$resource',
  function($resource){
    return $resource('<RESOURCE_URL>');
  }]);