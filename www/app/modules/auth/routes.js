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
			})
      .state('signup', {
        url: "/signup",
        templateUrl: "app/modules/auth/signup.html",
        controller: "SignupCtrl",
        deny: {
          logged: true
        }
      })
      .state('forget', {
        url: "/forget",
        templateUrl: "app/modules/auth/forget.html",
        controller: "ForgetCtrl",
        deny: {
          logged: true
        }
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