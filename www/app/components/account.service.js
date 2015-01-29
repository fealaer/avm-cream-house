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

    /**
     * Sign Up new account with Email
     * @param {Object} data
     * @returns {Promise.promise}
     */
    self.signUpEmail = function (data) {
      return account.all('signup').customPOST(data);
    };

//    /**
//     * Sign Up new account with Facebook
//     * @returns {Promise.promise}
//     */
//    self.signUpFacebook = function () {
//      return account.one('auth/facebook').get();
//    };
//
//    /**
//     * Sign Up new account with Google
//     * @returns {Promise.promise}
//     */
//    self.signUpGoogle = function () {
//      return account.one('auth/google').get();
//    };
//
//    /**
//     * Sign Up new account with Twitter
//     * @returns {Promise.promise}
//     */
//    self.signUpTwitter = function () {
//      return account.one('auth/twitter').get();
//    };

    self.isAuthenticated = function () {
      return !!self.getAccountData();
    };

    self.getAccountData = function  () {
      return angular.copy($localStorage.account);
    };

    self.setAccountData = function (account) {
      $localStorage.account = angular.copy(account);
      $rootScope.$broadcast('$accountUpdated');
    };

    self.cleanAccountData = function () {
      delete $localStorage.account;
    };

    self.getState = function () {
      return self.isAuthenticated() ? 'menu.drinks' : 'login';
    };
	});