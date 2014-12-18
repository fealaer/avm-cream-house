'use strict';

angular.module('avm.tabs.drinks')
	.config(function ($stateProvider) {
		$stateProvider
			.state('tabs.drinks', {
				url: "/drinks",
				views: {
					'drinks@tabs': {
						templateUrl: "app/modules/tabs/drinks/list.html",
						controller: 'DrinksListCtrl'
					},
					'rightSlider@': {
						templateUrl: "app/modules/tabs/drinks/filter.html",
						controller: 'DrinksFilterCtrl'
					}
				},
				resolve: {
					items: function (drinksService) {
						return drinksService.getAll();
					}
				}
			})
			.state('tabs.drinks.item', {
				url: '/{id:[a-z_]+}',
				views: {
					'drinks@tabs': {
						templateUrl: "app/modules/tabs/drinks/item.html",
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