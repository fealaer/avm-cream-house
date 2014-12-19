'use strict';

angular.module('avm.tabs.ingredients')
	.controller('IngredientsListCtrl', function ($scope, items, listFilter) {
		$scope.items = items;
		$scope.$on('filterChanged', function() {
			setFilter();
		});
		function setFilter() {
			$scope.search = angular.copy(listFilter.get('ingredients'));
		}

		setFilter();

		$scope.drinksWith = function (item) {

		}
	});
