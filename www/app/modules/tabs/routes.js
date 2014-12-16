'use strict';

angular.module('avm.tabs')
	.config(function ($stateProvider) {
		$stateProvider
			.state('tabs', {
				url: "/tabs",
				abstract: true,
				templateUrl: "app/modules/tabs/tabs.html",
				controller: "TabsCtrl"
			});
	});