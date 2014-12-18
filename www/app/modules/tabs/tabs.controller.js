angular.module('avm.tabs')
	.controller('TabsCtrl', function($scope, $ionicSideMenuDelegate) {
		$scope.openFilter = function () {
			$ionicSideMenuDelegate.toggleRight();
		}
	});