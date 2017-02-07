'use strict';


/** @ngInject */
function OverviewController($scope, $interval, $log, Providers) {

  var vm = this;
	$log.info("OverviewController");
	  
  
  /**
   * Load data
   *
   * @param {Object} health Health data from server
   */
  function loadData(providers) {
	  
	  $log.info("loadData");
	  
    // set data's view
    vm.providers = providers;
  }

  /**
   * Action when load datas failed
   *
   * @param {Object} error Error state object
   */
  function erroData(error) {
    vm.health = {};
    $log.error(error);
  }

  alert("overview");
  
  // first load
  // Health.get(loadData, erroData);

  // Auto refresh data
  var intervalId = $interval(function () {
    // Health.get(loadData, erroData);
  }, 3000);

  // Stop auto refresh when page change
  $scope.$on('$destroy', function () {
    $interval.cancel(intervalId);
  });

}

module.exports = OverviewController;
