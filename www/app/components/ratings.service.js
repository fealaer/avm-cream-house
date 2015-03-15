'use strict';

angular.module('avm.components')
	.service('ratingService', function ($rootScope, Restangular, httpTimeOut) {
    var self = this;
    var url = 'drinks';
    var rating = Restangular.one(url);

		/**
		 * Retrieves all ratings
		 * @returns {promise}
		 */
		self.getAll = function () {
      return rating.withHttpConfig({timeout: httpTimeOut.setUp()}).get();
		};

    self.rate = function (data) {
      return rating.one('rate').withHttpConfig({timeout: httpTimeOut.setUp()}).customPOST(data);
    }
	});