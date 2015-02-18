'use strict';

angular.module('avm.components')
	.service('account', function ($rootScope, Restangular, $localStorage, $q, md5) {
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

      account.all('login').customPOST(data).then(function (response) {
        self.setAccountData(response.result);
        deferred.resolve($localStorage.account);
      });

      return deferred.promise;
    };

    /**
     * Log out user
     * @returns {Promise.promise}
     */
    self.logout = function (email, password) {
      $localStorage.$reset();
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

    self.saveDrink = function (data) {
      return account.all('save/drink').customPOST(data);
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
      var defaultImage = '/images/common/user.png';
      if (!user) {
        return defaultImage;
      } else if (navigator.connection.type !== Connection.NONE) {
        if (user.profile && user.profile.picture) return user.profile.picture;
        if (!user.email) return  defaultImage;
        var hash = md5.createHash(user.email.toString().toLowerCase());
        return 'https://gravatar.com/avatar/' + hash + '?s=200&d=mm';
      } else {
        return defaultImage;
      }
    }
	});