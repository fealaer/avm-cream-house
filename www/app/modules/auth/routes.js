'use strict';

angular.module('avm.auth')
	.config(function ($stateProvider) {
		$stateProvider
      .state('auth', {
        url: "/auth",
        abstract: true,
        template: '<ui-view/>',
        controller: function (AdMobService) {
          AdMobService.hideBanner();
        },
        deny: {
          logged: true
        }
      })
			.state('auth.login', {
				url: "/login",
				templateUrl: "app/modules/auth/login.html",
				controller: "LoginCtrl"
			})
      .state('auth.signup', {
        url: "/signup",
        templateUrl: "app/modules/auth/signup.html",
        controller: "SignupCtrl"
      })
      .state('auth.forget', {
        url: "/forget",
        templateUrl: "app/modules/auth/forget.html",
        controller: "ForgetCtrl"
      });
//      .state('social_signin', {
//        url: "/social_signin",
//        templateUrl: "app/modules/auth/socialSignin.html",
//        controller: "SocialSigninCtrl",
//        deny: {
//          logged: true
//        }
//      });
	});