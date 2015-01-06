'use strict';

angular.module('avm.components')
	.controller('FilterCtrl', function ($rootScope, $scope, $filter, $state, listFilter, utils, $ionicSideMenuDelegate, ingredients) {
		var listName = $state.includes('tabs.drinks') ? 'drinks' : 'ingredients';
		var defFilter = {
			filter: {
				name: {
					en: '',
					ru: ''
				},
				properties: {
					density: '',
					flavor: ''
				},
				nutrition_facts: {
					vitamins: '',
					minerals: ''
				},
				ingredients: ''
			},
			order: {
				by: 'name.' + $rootScope.lang,
				reverse: false
			}
		};
		$scope.orderBy = [
			{value: 'name.' + $rootScope.lang, label: 'Name'},
			{value: 'price', label: 'Price'},
			{value: 'rate.rate', label: 'Rating'}
		];

		$scope.densities = [
			{value: '', label: 'Any'},
			{value: 'Creamy', label: 'Creamy'},
			{value: 'Liquid', label: 'Liquid'}
		];

		$scope.flavors = [
			{value: '', label: 'Any'},
			{value: 'Sweet', label: 'Sweet'},
			{value: 'Sour', label: 'Sour'},
			{value: 'Bitter', label: 'Bitter'},
			{value: 'Salty', label: 'Salty'},
			{value: 'Umami', label: 'Umami'},
			{value: 'Pungency', label: 'Pungency'},
			{value: 'Numbing', label: 'Numbing'}
		];

		$scope.vitamins = [
			{value: '', label: 'Any'},
			{value: 'A', label: 'A'},
			{value: 'B', label: 'B'},
			{value: 'C', label: 'C'},
			{value: 'D', label: 'D'},
			{value: 'E', label: 'E'},
			{value: 'K', label: 'K'},
			{value: 'N', label: 'N'},
			{value: 'P', label: 'P'},
			{value: 'U', label: 'U'}
		];

		$scope.minerals = [
			{value: '', label: 'Any'},
			{value: 'Potassium', label: 'Potassium'},
			{value: 'Chlorine', label: 'Chlorine'},
			{value: 'Sodium', label: 'Sodium'},
			{value: 'Calcium', label: 'Calcium'},
			{value: 'Phosphorus', label: 'Phosphorus'},
			{value: 'Magnesium', label: 'Magnesium'},
			{value: 'Zinc', label: 'Zinc'},
			{value: 'Iron', label: 'Iron'},
			{value: 'Manganese', label: 'Manganese'},
			{value: 'Copper', label: 'Copper'},
			{value: 'Iodine', label: 'Iodine'},
			{value: 'Selenium', label: 'Selenium'},
			{value: 'Molybdenum', label: 'Molybdenum'},
			{value: 'Bromine', label: 'Bromine'}
		];

		$scope.ingredients = angular.copy(ingredients);
		$scope.ingredients.unshift({id: '', name: {'en': 'Any', 'ru': 'Любой'}});

		function extendDeep(dst) {
			angular.forEach(arguments, function (obj) {
				if (obj !== dst) {
					angular.forEach(obj, function (value, key) {
						if (dst[key] && dst[key].constructor && dst[key].constructor === Object) {
							extendDeep(dst[key], value);
						} else {
							dst[key] = angular.copy(value);
						}
					});
				}
			});
			return dst;
		}

		$scope.newFilter = {};
		$scope.newOrder = {};

		function init() {
			angular.copy(defFilter.filter, $scope.newFilter);
			angular.copy(defFilter.order, $scope.newOrder);
		}

		function refresh() {
			init();
			var filter = angular.copy(listFilter.get(listName));
			extendDeep($scope.newFilter, filter.filter);
			extendDeep($scope.newOrder, filter.order);
		}

		$scope.resetFilter = function () {
			init();
			closeFilter();
		};

		$scope.applyFilter = function () {
			closeFilter();
		};

		function closeFilter() {
			var cleanFilter = {
				filter: utils.cleanObject(angular.copy($scope.newFilter)),
				order: utils.cleanObject(angular.copy($scope.newOrder))
			};
			listFilter.set(listName, cleanFilter);
			$ionicSideMenuDelegate.toggleRight();
		}

		refresh();

		$scope.$on('filterChanged', function () {
			refresh();
		});
	});