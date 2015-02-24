'use strict';

angular.module('avm.about')
	.config(function ($stateProvider) {
		$stateProvider
			.state('base.about', {
				url: "about",
				templateUrl: "app/modules/about/about.html",
				controller: "AboutCtrl",
        allow: {
          logged: true
        }
			})
      .state('base.about-app', {
        url: "about-app",
        templateUrl: "app/modules/about/app.html",
        controller: "AboutAppCtrl",
        allow: {
          logged: true
        }
      });
	});