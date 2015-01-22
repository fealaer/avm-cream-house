'use strict';

angular.module('avm.about')
	.config(function ($stateProvider) {
		$stateProvider
			.state('base.about', {
				url: "/about",
				templateUrl: "app/modules/about/about.html",
				controller: "AboutCtrl",
        allow: {
          logged: true
        }
			});
	});