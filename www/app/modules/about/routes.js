'use strict';

angular.module('avm.about')
	.config(function ($stateProvider) {
		$stateProvider
			.state('about', {
				url: "/about",
				templateUrl: "app/modules/about/about.html",
				controller: "AboutCtrl"
			});
	});