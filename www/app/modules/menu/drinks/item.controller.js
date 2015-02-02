'use strict';

angular.module('avm.menu.drinks')
	.controller('DrinksItemCtrl', function ($scope, item, ingredients, account) {
		$scope.item = item;
		$scope.ingredients = ingredients;
    $scope.account = account;

		$scope.usedIngredients = function (ingredient) {
			return _.contains($scope.item.ingredients, ingredient.id);
		}
	});
