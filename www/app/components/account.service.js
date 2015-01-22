'use strict';

angular.module('avm.components')
	.service('account', function ($rootScope, Restangular, $localStorage) {
    var self = this;
    var url = 'account';
    var account = Restangular.one(url);

    /**
     * Log in user to his account
     * @param {Object} data
     * @returns {Promise.promise}
     */
    self.login = function (data) {
      return account.all('login').customPOST(data);
    };

    /**
     * Log out user
     * @returns {Promise.promise}
     */
    self.logout = function (email, password) {
      self.cleanAccountData();
      return account.one('logout').get();
    };

    self.isAuthenticated = function () {
      return !!self.getAccountData();
    };

    self.getAccountData = function  () {
      return $localStorage.account;
    };

    self.setAccountData = function (account) {
      $localStorage.account = account;
      $rootScope.$broadcast('$accountUpdated');
    };

    self.cleanAccountData = function () {
      delete $localStorage.account;
    }

	});