'use strict';

angular.module('avm.menu.drinks')
	.controller('DrinksListCtrl', function ($scope, $filter, $state, items, listFilter, $ionicScrollDelegate) {
		$scope.items = items;
    $scope.filtered;
    $scope.reverse;

		$scope.$on('filterChanged', function(event, listName) {
      if (listName === 'drinks') {
        setFilter();
        $ionicScrollDelegate.$getByHandle('drinks-list').scrollTop();
      }
		});
		function setFilter() {
			$scope.search = angular.copy(listFilter.get('drinks'));
      $scope.filtered = $filter('filter')($scope.items, $scope.search.filter).length;
      $scope.reverse = ($scope.search.order.by === 'rate.rate' ? !$scope.search.order.reverse : $scope.search.order.reverse)
		}

		$scope.$on('$ionicView.afterEnter', function() {
			setFilter();
		});
	});
