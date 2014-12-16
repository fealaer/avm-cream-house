'use strict';

angular.module('avm.components')
	.service('utils', function () {
		var self = this;

		self.cleanObject = function (obj) {
			for (var k in obj) {
				if (_.isUndefined(obj[k]) || _.isNull(obj[k]) || _.isEmpty(obj[k])) {
					delete obj[k];
				} else if (_.isObject(obj[k])) {
					self.cleanObject(obj[k]);
				}
			}
			return obj;
		}
	});