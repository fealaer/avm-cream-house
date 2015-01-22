'use strict';

angular.module('avm.auth')
	.config(function ($stateProvider) {
		$stateProvider
			.state('login', {
				url: "/login",
				templateUrl: "app/modules/auth/login.html",
				controller: "LoginCtrl",
        deny: {
          logged: true
        }
			});
	});