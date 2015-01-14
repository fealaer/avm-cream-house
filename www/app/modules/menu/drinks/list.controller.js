'use strict';

angular.module('avm.menu.drinks')
	.controller('DrinksListCtrl', function ($scope, $state, items, listFilter) {
		$scope.items = items;
		$scope.$on('filterChanged', function() {
      if ($state.is('menu.drinks')) {
        setFilter();
      }
		});
		function setFilter() {
			$scope.search = angular.copy(listFilter.get('drinks'));
		}

		$scope.$on('$ionicView.afterEnter', function() {
			setFilter();
		});
	});
