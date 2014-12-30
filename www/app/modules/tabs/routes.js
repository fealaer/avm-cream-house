'use strict';

angular.module('avm.tabs')
	.config(function ($stateProvider) {
		$stateProvider
			.state('tabs', {
				url: "/tabs",
				abstract: true,
				templateUrl: "app/modules/tabs/tabs.html",
				controller: "TabsCtrl",
				resolve: {
					ingredients: function (ingredientsService) {
						return ingredientsService.getAll();
					}
				}
			});
	});