'use strict';

angular.module('avm.menu')
	.config(function ($stateProvider) {
		$stateProvider
			.state('menu', {
				url: "/menu",
				abstract: true,
				templateUrl: "app/modules/menu/menu.html",
				controller: "MenuCtrl",
				resolve: {
					ingredients: function (ingredientsService) {
						return ingredientsService.getAll();
					}
				},
        allow: {
          logged: true
        }
			});
	});