'use strict';

angular.module('avm.components')
	.service('utils', function () {
		var self = this;

		self.cleanObject = function (obj) {
			for (var k in obj) {
				if (_.isObject(obj[k])) {
					self.cleanObject(obj[k]);
				}
				if (!_.isBoolean(obj[k]) && (_.isUndefined(obj[k]) || _.isNull(obj[k]) || _.isEmpty(obj[k]))) {
					delete obj[k];
				}
			}
			return obj;
		}
	});