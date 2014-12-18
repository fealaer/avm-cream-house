'use strict';

angular.module('avm.tabs.drinks')
	.controller('DrinksFilterCtrl', function($rootScope, $scope, $filter, $state, listFilter, utils, $ionicSideMenuDelegate) {
		var listName = 'drinks';
		var defFilter = {
			filter: {
				name: {
					en: '',
					ru: ''
				},
				properties: {
					density: '',
					flavor: ''
				}
			},
			order: {
				by: 'name.' + $rootScope.lang,
				reverse: false
			}
		};
		$scope.orderBy = [
			{
				value: 'name.' + $rootScope.lang,
				label: 'Name'
			},
			{
				value: 'price',
				label: 'Price'
			},
			{
				value: 'rate.rate',
				label: 'Rating'
			}
		];

		function init() {
			$scope.newFilter = angular.copy(defFilter.filter);
			$scope.newOrder = angular.copy(defFilter.order);
		}

		function refresh () {
			init();
			var filter = angular.copy(listFilter.get(listName));
			angular.extend($scope.newFilter, filter.filter);
			angular.extend($scope.newOrder, filter.order);
		}

		$scope.resetFilter = function () {
			init();
			closeFilter();
		};

		$scope.applyFilter = function () {
			closeFilter();
		};

		function closeFilter () {
			var cleanFilter = {
				filter: utils.cleanObject($scope.newFilter),
				order: utils.cleanObject($scope.newOrder)
			};
			listFilter.set(listName, cleanFilter);
			$ionicSideMenuDelegate.toggleRight();
		}

		refresh();

		$scope.$on('filterChanged', function() {
			refresh();
		});
	});