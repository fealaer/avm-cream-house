'use strict';

angular.module('avm.menu.drinks')
	.controller('DrinksListCtrl', function ($scope, items, listFilter, $ionicSideMenuDelegate) {
		$scope.items = items;
		$scope.$on('filterChanged', function() {
			setFilter();
		});
		function setFilter() {
			$scope.search = angular.copy(listFilter.get('drinks'));
		}

		$scope.$on('$ionicView.afterEnter', function() {
			setFilter();
		});
	});
