'use strict';

angular.module('avm.components')
	.service('account', function ($rootScope, Restangular, $localStorage, $q, md5, cordovaHelper, gaService, httpTimeOut) {
    var self = this;
    var url = 'account';
    var account = Restangular.one(url);

    /**
     * Log in user to his account
     * @param {Object} data
     * @returns {Promise.promise}
     */
    self.login = function (data) {
      var deferred = $q.defer();

      account.all('login').withHttpConfig({timeout: httpTimeOut.setUp()}).customPOST(data).then(function (response) {
        self.setAccountData(response.result);
        gaService.setUserId($localStorage.account.email);
        deferred.resolve($localStorage.account);
      });

      return deferred.promise;
    };

    /**
     * Log out user
     * @returns {Promise.promise}
     */
    self.logout = function (email, password) {
      var locale = angular.copy($localStorage.locale);
      $localStorage.$reset({
        account: {},
        drinks: {},
        updated: new Date(),
        locale: locale
      });
      gaService.setUserId('guest');
      return account.one('logout').withHttpConfig({timeout: httpTimeOut.setUp()}).get();
    };

    /**
     * Sign Up new account with Email
     * @param {Object} data
     * @returns {Promise.promise}
     */
    self.signUpEmail = function (data) {
      return account.all('signup').withHttpConfig({timeout: httpTimeOut.setUp()}).customPOST(data);
    };

    self.forgot = function (data) {
      return account.all('forgot').withHttpConfig({timeout: httpTimeOut.setUp()}).customPOST(data);
    };

    self.reset = function (data) {
      return account.all('reset').withHttpConfig({timeout: httpTimeOut.setUp()}).customPOST(data);
    };

    self.saveDrink = function (data) {
      return account.all('save/drink').withHttpConfig({timeout: httpTimeOut.setUp()}).customPOST(data);
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
      return !!$localStorage.account && !!$localStorage.account.email;
    };

    self.getAccountData = function  () {
      return $localStorage.account;
    };

    self.setAccountData = function (account) {
      angular.copy(account, $localStorage.account);
      $rootScope.$broadcast('$accountUpdated');
    };

    self.cleanAccountData = function () {
      $localStorage.account = {};
    };

    self.getState = function () {
      return self.isAuthenticated() ? 'menu.drinks' : 'auth.login';
    };

    self.tried = function (id) {
      $localStorage.account.tried.push(id);
      $rootScope.$broadcast('$accountUpdated');
    };

    self.avatar = function (user) {
      var defaultImage = 'images/common/user.png';
      if (!user) {
        return defaultImage;
      } else if (cordovaHelper.isConnected()) {
        if (user.profile && user.profile.picture) return user.profile.picture;
        if (!user.email) return  defaultImage;
        var hash = md5.createHash(user.email.toString().toLowerCase());
        return 'https://gravatar.com/avatar/' + hash + '?s=200&d=mm';
      } else {
        return defaultImage;
      }
    }
	});