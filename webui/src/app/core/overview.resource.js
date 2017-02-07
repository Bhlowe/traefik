'use strict';
var angular = require('angular');

var traefikCoreOverview = 'traefik.core.overview';
module.exports = traefikCoreOverview;

angular
  .module(traefikCoreOverview, ['ngResource'])
  .factory('Overview', Overview);

  /** @ngInject */
  function Overview($resource) {
    return $resource('../api/providers');
  }