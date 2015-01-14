'use strict';

angular.module('avm.menu.ingredients')
	.controller('IngredientsListCtrl', function ($scope, $state, ingredients, listFilter) {
		$scope.items = ingredients;
		$scope.$on('filterChanged', function() {
      if ($state.is('menu.ingredients')) {
        setFilter();
      }
		});
		function setFilter() {
			$scope.search = angular.copy(listFilter.get('ingredients'));
		}

    $scope.$on('$ionicView.afterEnter', function() {
      setFilter();
    });
	});
