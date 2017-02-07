'use strict';
var angular = require('angular');
var traefikCoreOverview = require('../../core/overview.resource');
var OverviewController = require('./overview.controller');

var traefikSectionOverview = 'traefik.section.overview';
module.exports = traefikSectionOverview;

angular
  .module(traefikSectionOverview, [traefikCoreOverview])
  .controller('OverviewController', OverviewController)
  .config(config);

  /** @ngInject */
  function config($stateProvider) {

    $stateProvider.state('overview', {
      url: '/overview',
      template: require('./overview.html'),
      controller: 'OverviewController',
      controllerAs: 'overviewCtrl'
    });

  }