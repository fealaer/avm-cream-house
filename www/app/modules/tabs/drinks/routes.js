'use strict';

angular.module('avm.tabs.drinks')
	.config(function ($stateProvider) {
		$stateProvider
			.state('tabs.drinks', {
				url: "/drinks",
				deepStateRedirect: true,
				sticky: true,
				views: {
					'drinks@tabs': {
						template: '<div ui-view="list" ng-show="$state.includes(\'tabs.drinks.list\')"></div>' +
							'<div ui-view="item" ng-show="$state.includes(\'tabs.drinks.item\')"></div>',
						controller: 'DrinksCtrl'
					}
				}
			})
			.state('tabs.drinks.list', {
				url: "/list",
				views: {
					'list@tabs.drinks': {
						templateUrl: "app/modules/tabs/drinks/list.html",
						controller: 'DrinksListCtrl'
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
					'item@tabs.drinks': {
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