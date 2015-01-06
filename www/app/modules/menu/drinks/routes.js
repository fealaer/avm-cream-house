'use strict';

angular.module('avm.menu.drinks')
	.config(function ($stateProvider) {
		$stateProvider
			.state('menu.drinks', {
				url: "/drinks",
				views: {
					'drinks@menu': {
						templateUrl: "app/modules/menu/drinks/list.html",
						controller: 'DrinksListCtrl'
					},
					'rightSlider@': {
						templateUrl: "app/modules/menu/drinks/filter.html",
						controller: 'FilterCtrl'
					}
				},
				resolve: {
					items: function (drinksService) {
						return drinksService.getAll();
					}
				}
			})
			.state('menu.drinks.item', {
				url: '/{id:[a-z_]+}',
				views: {
					'drinks@menu': {
						templateUrl: "app/modules/menu/drinks/item.html",
						controller: 'DrinksItemCtrl'
					}
				},
				resolve: {
					item: function ($stateParams, drinksService) {
						return drinksService.getOne($stateParams.id);
					}
				}
			});
	});