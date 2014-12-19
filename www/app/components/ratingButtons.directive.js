'use strict';

angular.module('avm.components')
	.directive("ratingButtons", function () {
		return {
			restrict: 'E',
			scope: {
				model: '=ngModel',
				readonly: '='
			},
			replace: true,
			transclude: true,
			templateUrl: 'app/components/ratingButtons.directive.html',
			controller: [
				'$scope', '$attrs', '$http', function ($scope, $attrs, $http) {
					$scope.stars = [1, 2, 3, 4, 5];
					$scope.setRating = function (rating) {
						if (!$scope.readonly) {
							$scope.model = rating;
						}
					};
				}
			]
		};
	});