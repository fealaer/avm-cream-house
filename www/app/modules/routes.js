'use strict';

angular.module('avm.modules')
	.config(function ($stateProvider) {
		$stateProvider
			.state('base', {
				url: "/",
				templateUrl: "app/modules/leftSideLayout.html",
				controller: function ($state, account, AdMobService) {
          if ($state.is('base')) {
            $state.go(account.getState());
          } else {
            AdMobService.showBanner();
          }
        }
			});
	});