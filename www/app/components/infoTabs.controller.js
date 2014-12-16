'use strict';

angular.module('avm.components')
	.controller('InfoTabsCtrl', function ($scope) {
		$scope.tabName = 'info';

		$scope.setTab = function (tabName) {
			$scope.tabName = tabName;
		};

		$scope.isSet = function (tabName) {
			return $scope.tabName === tabName;
		};
	});