'use strict';

angular.module('avm.tabs.drinks')
	.controller('DrinksListCtrl', function ($scope, items, listFilter) {
		$scope.items = items;
		$scope.filterConfig = {
			default: {},
			listName: 'drinks'
		};
		$scope.$on('filterChanged', function() {
			setFilter();
		});
		function setFilter() {
			$scope.search = angular.copy(listFilter.get($scope.filterConfig.listName));
		}

		setFilter();
	});
