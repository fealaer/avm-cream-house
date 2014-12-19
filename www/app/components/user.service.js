'use strict';

angular.module('avm.components')
	.service('userService', function ($q, $filter) {
		var self = this;
		var user = {
			email: 'fealaer@gmail.com',
			name: 'Andrey Pushkarev',
			tried: ['baeli_fruit', 'custard_apple', 'guava', 'jackfruit', 'jambu', 'kirala', 'lawulu', 'lemon', 'lime', 'lovi', 'mango', 'nelli', 'papaya', 'palm_fruit', 'passion_fruit', 'pineapple', 'soursop_annona', 'sugar_cane', 'tamarind', 'veralu', 'woodapple', 'watermelon'],
			saved: ['almond', 'ambarella', 'baeli_fruit', 'cantaloupe', 'cashew_apple', 'cashew_nut', 'cocoa_fruit']
		};

		/**
		 * Retrieves user
		 * @returns {promise}
		 */
		self.getUser = function () {
			var deferred = $q.defer();
			deferred.resolve(user);
			return deferred.promise;
		};
	});