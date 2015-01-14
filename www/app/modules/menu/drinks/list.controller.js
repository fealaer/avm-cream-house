'use strict';

angular.module('avm.menu.drinks')
	.controller('DrinksListCtrl', function ($scope, $state, items, listFilter, $ionicScrollDelegate) {
		$scope.items = items;
		$scope.$on('filterChanged', function(event, listName) {
      if (listName === 'drinks') {
        setFilter();
        $ionicScrollDelegate.$getByHandle('drinks-list').scrollTop();
      }
		});
		function setFilter() {
			$scope.search = angular.copy(listFilter.get('drinks'));
		}

		$scope.$on('$ionicView.afterEnter', function() {
			setFilter();
		});
	});
