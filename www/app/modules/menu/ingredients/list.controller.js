'use strict';

angular.module('avm.menu.ingredients')
	.controller('IngredientsListCtrl', function ($scope, $filter, $state, ingredients, listFilter, $ionicScrollDelegate) {
		$scope.items = ingredients;
    $scope.filtered;
		$scope.$on('filterChanged', function(event, listName) {
      if (listName === 'ingredients') {
        setFilter();
        $ionicScrollDelegate.$getByHandle('ingredients-list').scrollTop();
      }
		});
		function setFilter() {
			$scope.search = angular.copy(listFilter.get('ingredients'));
      $scope.filtered = $filter('filter')($scope.items, $scope.search.filter).length;
		}

    $scope.$on('$ionicView.afterEnter', function() {
      setFilter();
    });
	});
