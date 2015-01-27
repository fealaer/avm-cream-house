'use strict';

angular.module('avm.modules')
	.config(function ($stateProvider) {
		$stateProvider
			.state('base', {
				url: "/",
				templateUrl: "app/modules/leftSideLayout.html",
				controller: function ($state, account) {
          if ($state.is('base')) {
            $state.go(account.isAuthenticated() ? 'menu.drinks' : 'login');
          }
        }
			});
	});