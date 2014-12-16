'use strict';

angular.module('avm.components')
	.filter('join', function () {
		return function (array, splitter) {
			if (array && splitter) {
				if (_.isArray(array)) {
					return array.join(splitter);
				} else {
					return array;
				}
			} else {
				return '';
			}
		};
	});