'use strict';

angular.module('avm.account')
	.config(function ($stateProvider) {
		$stateProvider
			.state('login', {
				url: "/account/login",
				templateUrl: "app/modules/account/login.html",
				controller: "LoginCtrl",
        deny: {
          logged: true
        }
			})
      .state('base.profile', {
        url: "/account/profile",
        templateUrl: "app/modules/account/profile.html",
        controller: "ProfileCtrl",
        allow: {
          logged: true
        }
      });
	});