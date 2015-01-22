'use strict';

angular.module('avm.modules')
	.config(function ($stateProvider) {
		$stateProvider
			.state('base', {
				url: "/",
				abstract: true,
				templateUrl: "app/modules/leftSideLayout.html",
				controller: function() { },
        allow: {
          logged: true
        }
			});
	});