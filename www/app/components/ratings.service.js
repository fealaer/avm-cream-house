'use strict';

angular.module('avm.components')
	.service('ratingService', function ($rootScope, Restangular, $localStorage) {
    var self = this;
    var url = 'drinks';
    var rating = Restangular.one(url);

		/**
		 * Retrieves all ratings
		 * @returns {promise}
		 */
		self.getAll = function () {
      return rating.get();
		};
	});