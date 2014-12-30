'use strict';

angular.module('avm.tabs.ingredients')
	.config(function ($stateProvider) {
		$stateProvider
			.state('tabs.ingredients', {
				url: "/ingredients",
				views: {
					'ingredients@tabs': {
						templateUrl: "app/modules/tabs/ingredients/list.html",
						controller: 'IngredientsListCtrl'
					},
					'rightSlider@': {
						templateUrl: "app/modules/tabs/ingredients/filter.html",
						controller: 'FilterCtrl'
					}
				},
				resolve: {
					items: function (ingredientsService) {
						return ingredientsService.getAll();
					}
				}
			})
			.state('tabs.ingredients.item', {
				url: '/{id:[a-z_]+}',
				views: {
					'ingredients@tabs': {
						templateUrl: "app/modules/tabs/ingredients/item.html",
						controller: 'IngredientsItemCtrl'
					}
				},
				resolve: {
					item: function ($stateParams, ingredientsService) {
						return ingredientsService.getOne($stateParams.id);
					}
				}
			});
	});