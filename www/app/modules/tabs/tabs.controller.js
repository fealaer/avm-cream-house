angular.module('avm.tabs')
	.controller('TabsCtrl', function($rootScope, $scope, $ionicSideMenuDelegate, $ionicModal, listFilter, $state) {
		$scope.openFilter = function () {
			$ionicSideMenuDelegate.toggleRight();
		};

		var defData = {
			rate: 2,
			comment: ''
		};

		$scope.toTry = function (item) {
			$scope.item = item;
			$scope.data = angular.copy(defData);
			openModal();
		};

		$scope.toSave = function (item) {
			item.isSaved = !item.isSaved;
		};

		$scope.drinksWith = function (item) {
			var filter = {
				filter: {
					ingredients: item.id
				},
				order: {
					by: 'name.' + $rootScope.lang,
					reverse: false
				}
			};
			listFilter.set('drinks', filter);
			$state.go('tabs.drinks');
		};

		$scope.save = function () {
			closeModal();
			if ($scope.data) {
				$scope.item.isTried = true;

				if ($scope.data.comment) {
					$scope.item.totalComments++;
					$scope.item.comments.push($scope.data.comment);
				}
				$scope.item.rate.based++;
				switch ($scope.data.rate) {
					case 1:
						$scope.item.rate.ratings.one++;
						break;
					case 2:
						$scope.item.rate.ratings.two++;
						break;
					case 3:
						$scope.item.rate.ratings.three++;
						break;
					case 4:
						$scope.item.rate.ratings.four++;
						break;
					case 5:
						$scope.item.rate.ratings.five++;
						break;
				}
				$scope.item.rate.ratings['' + $scope.data.rate]++;
				var ratings = $scope.item.rate.ratings;
				$scope.item.rate.rate = (ratings['one'] + ratings['two'] * 2 + ratings['three'] * 3 + ratings['four'] * 4 + ratings['five'] * 5) / $scope.item.rate.based;
			}
		};

		$scope.cancel = function () {
			closeModal();
		};

		$ionicModal.fromTemplateUrl('app/components/tryDrink.modal.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function (modal) {
			$scope.modal = modal;
		});


		//Cleanup the modal when we're done with it!
		$scope.$on('$destroy', function () {
			$scope.modal.remove();
		});
		// Execute action on hide modal
		$scope.$on('modal.hidden', function () {
			// Execute action
		});
		// Execute action on remove modal
		$scope.$on('modal.removed', function () {
			// Execute action
		});
		function openModal () {
			$scope.modal.show();
		}
		function closeModal () {
			$scope.modal.hide();
		}
	});