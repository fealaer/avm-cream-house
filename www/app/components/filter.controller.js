'use strict';

angular.module('avm.components')
	.controller('FilterCtrl', function ($rootScope, $scope, $filter, $state, listFilter, utils, $ionicSideMenuDelegate, ingredients, gettextCatalog) {
		var listName = $state.includes('menu.drinks') ? 'drinks' : 'ingredients';
		var defFilter = {
			filter: {
				name: {
					'$': ''
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
			{value: 'name.' + $rootScope.lang, label: gettextCatalog.getString('Name')},
			{value: 'price', label: gettextCatalog.getString('Price')},
			{value: 'rate.rate', label: gettextCatalog.getString('Rating')}
		];

		$scope.densities = [
			{value: '', label: gettextCatalog.getString('Any')},
			{value: 'Creamy', label: gettextCatalog.getString('Creamy')},
			{value: 'Liquid', label: gettextCatalog.getString('Liquid')}
		];

		$scope.flavors = [
			{value: '', label: gettextCatalog.getString('Any')},
			{value: 'Sweet', label: gettextCatalog.getString('Sweet')},
			{value: 'Sour', label: gettextCatalog.getString('Sour')},
			{value: 'Bitter', label: gettextCatalog.getString('Bitter')},
			{value: 'Salty', label: gettextCatalog.getString('Salty')},
			{value: 'Umami', label: gettextCatalog.getString('Umami')},
			{value: 'Pungency', label: gettextCatalog.getString('Pungency')},
			{value: 'Numbing', label: gettextCatalog.getString('Numbing')}
		];

		$scope.vitamins = [
			{value: '', label: gettextCatalog.getString('Any')},
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
			{value: '', label: gettextCatalog.getString('Any')},
			{value: 'Potassium', label: gettextCatalog.getString('Potassium')},
			{value: 'Chlorine', label: gettextCatalog.getString('Chlorine')},
			{value: 'Sodium', label: gettextCatalog.getString('Sodium')},
			{value: 'Calcium', label: gettextCatalog.getString('Calcium')},
			{value: 'Phosphorus', label: gettextCatalog.getString('Phosphorus')},
			{value: 'Magnesium', label: gettextCatalog.getString('Magnesium')},
			{value: 'Zinc', label: gettextCatalog.getString('Zinc')},
			{value: 'Iron', label: gettextCatalog.getString('Iron')},
			{value: 'Manganese', label: gettextCatalog.getString('Manganese')},
			{value: 'Copper', label: gettextCatalog.getString('Copper')},
			{value: 'Iodine', label: gettextCatalog.getString('Iodine')},
			{value: 'Selenium', label: gettextCatalog.getString('Selenium')},
			{value: 'Molybdenum', label: gettextCatalog.getString('Molybdenum')},
			{value: 'Bromine', label: gettextCatalog.getString('Bromine')}
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