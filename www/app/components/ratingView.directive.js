'use strict';

angular.module('avm.components')
	.directive("ratingView", function () {
		return {
			restrict: 'E',
			scope: {
				rate: '='
			},
			replace: true,
			transclude: true,
			templateUrl: 'app/components/ratingView.directive.html',
			controller: ['$scope', '$attrs', '$http', function ($scope, $attrs, $http) {
				$scope.max = _.max($scope.rate.ratings);
			}]
		};
	});