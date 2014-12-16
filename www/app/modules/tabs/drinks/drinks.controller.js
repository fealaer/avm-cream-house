'use strict';

angular.module('avm.tabs.drinks')
	.controller('DrinksCtrl', function ($scope, $state) {
		$scope.toTry = function (item) {
			item.isTried = !item.isTried;
		};

		$scope.toSave = function (item) {
			item.isSaved = !item.isSaved;
		};
		if ($state.current.name === 'tabs.drinks') $state.go(".list");

		function openModal(ev) {
//					$mdDialog.show({
//						locals: {item: $scope.item},
//						bindToController: false,
//						controller: function ($scope, $mdDialog, item) {
//							$scope.item = item;
//							$scope.data = {
//								rate: 2,
//								comment: ''
//							};
//							$scope.hide = function() {
//								$mdDialog.hide();
//							};
//							$scope.cancel = function() {
//								$mdDialog.cancel();
//							};
//							$scope.save = function() {
//								$mdDialog.hide($scope.data);
//							};
//						},
//						templateUrl: 'app/components/tryDrink.modal.html',
//						targetEvent: ev
//					})
//						.then(function(data) {
//							if (data) {
//								$scope.item.tried = true;
//								$scope.isTried = $scope.item.tried;
//
//								if (data.comment) {
//									$scope.item.totalComments++;
//									$scope.item.comments.push(data.comment);
//								}
//								$scope.item.rate.based++;
//								switch (data.rate) {
//									case 1:
//										$scope.item.rate.ratings.one++;
//										break;
//									case 2:
//										$scope.item.rate.ratings.two++;
//										break;
//									case 3:
//										$scope.item.rate.ratings.three++;
//										break;
//									case 4:
//										$scope.item.rate.ratings.four++;
//										break;
//									case 5:
//										$scope.item.rate.ratings.five++;
//										break;
//								}
//								$scope.item.rate.ratings['' + data.rate]++;
//								var ratings = $scope.item.rate.ratings;
//								$scope.item.rate.rate = (ratings['one'] + ratings['two'] * 2 + ratings['three'] * 3 + ratings['four'] * 4 + ratings['five'] * 5) / $scope.item.rate.based;
//							}
//						}, function() {
//							$scope.alert = 'You cancelled the dialog.';
//						});
		}
	});