'use strict';

angular.module('avm.menu.ingredients')
	.controller('IngredientsListCtrl', function ($scope, ingredients, listFilter) {
		$scope.items = ingredients;
		$scope.$on('filterChanged', function() {
			setFilter();
		});
		function setFilter() {
			$scope.search = angular.copy(listFilter.get('ingredients'));
		}

		setFilter();
	});
