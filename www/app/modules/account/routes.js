'use strict';

angular.module('avm.account')
	.config(function ($stateProvider) {
		$stateProvider
			.state('base.profile', {
        url: "account/profile",
        templateUrl: "app/modules/account/profile.html",
        controller: "ProfileCtrl",
        allow: {
          logged: true
        }
      });
	});