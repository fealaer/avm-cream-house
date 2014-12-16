angular.module('avm.tabs')
	.controller('TabsCtrl', function($rootScope, $scope, $filter, $state, listFilter, utils) {
		$scope.newFilter = {};
		$scope.curFilter = {};
		$scope.lang = 'en';
		$scope.listName = '';
		var defOrder = {
			by: 'name.' + $scope.lang,
			reverse: false
		};
		$scope.newOrder = angular.copy(defOrder);
		$scope.curOrder = angular.copy(defOrder);


		function mapFilterValues(filter) {
			if (filter.name) {
				filter.name[$scope.lang] = filter.name;
				delete filter.name;
			}
			return filter;
		}

		$scope.openFilter = function (listName) {
			$scope.newFilter = {};
			$scope.listName = listName;
			var filter = angular.copy(listFilter.get($scope.listName));
			angular.extend($scope.newFilter, filter);
			$scope.curFilter = mapFilterValues(filter);
			openFilter();
		};

		$scope.resetFilter = function () {
			$scope.newFilter = {};
			$scope.newOrder = angular.copy(defOrder);
			closeFilter();
		};

		$scope.applyFilter = function () {
			closeFilter();
		};

		function openFilter () {
//			$mdSidenav('right').toggle();
		}
		function closeFilter () {
			var cleanFilter = utils.cleanObject($scope.newFilter);
			$scope.curFilter = mapFilterValues(angular.copy(cleanFilter));

			$scope.curOrder = angular.copy($scope.newOrder);
			listFilter.set($scope.listName, cleanFilter);
//			$mdSidenav('right').close();
		}

		$scope.openLeftMenu = function () {
//			$mdSidenav('left').toggle();
		};

		$scope.selectedIndex = 0;
	});