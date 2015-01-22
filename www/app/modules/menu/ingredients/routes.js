'use strict';

angular.module('avm.menu.ingredients')
	.config(function ($stateProvider) {
		$stateProvider
			.state('menu.ingredients', {
				url: "/ingredients",
				views: {
					'ingredients@menu': {
						templateUrl: "app/modules/menu/ingredients/list.html",
						controller: 'IngredientsListCtrl'
					},
					'rightSlider@menu': {
						templateUrl: "app/modules/menu/ingredients/filter.html",
						controller: 'FilterCtrl'
					}
				}
			})
			.state('menu.ingredients.item', {
				url: '/{id:[a-z_]+}',
				views: {
					'ingredients@menu': {
						templateUrl: "app/modules/menu/ingredients/item.html",
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