'use strict';

angular.module('avm', [
	'avm.components',
	'avm.modules'
])

	.config(function ($settings, $logProvider, $locationProvider, $urlRouterProvider, //                    localeProvider,
                    RestangularProvider) {

		// Configure logging
		$logProvider.debugEnabled($settings.debug);

		// Configure Restangular
		(function () {
			RestangularProvider.setBaseUrl($settings.apiURL);
			RestangularProvider.setRequestSuffix('/');
			RestangularProvider.setDefaultHttpFields({
				cache: !$settings.debug,
        withCredentials: true
			});
			RestangularProvider.setDefaultHeaders({
				'Content-Type': 'application/json',
				'X-Requested-With': 'XMLHttpRequest'
			});
			RestangularProvider.addFullRequestInterceptor(function (element, operation, what, url, headers, params, httpConfig) {
				if (operation === 'remove' || (operation === 'put' && angular.equals(element, {id: undefined}))) {
					// Send a delete WITHOUT a body.
					element = null;
				} else if (headers['Content-Type'] && headers['Content-Type'] === 'application/x-www-form-urlencoded') {
					// Convert json request to x-www-form-urlencoded request
					element = $.param(element);
				}

				return {
					headers: headers,
					element: element,
					params: params,
					httpConfig: httpConfig
				};
			});
		})();

		// Configure default router
		$urlRouterProvider.otherwise('/');
	})

	.run(function ($rootScope, $settings, $log, $timeout, $cacheFactory, $location, $window, $state, gettextCatalog, accessManager, Restangular, errorResponseInterceptor, $localStorage, AdMobService, $ionicLoading, internetCallService) {
    supersonic.ui.navigationBar.hide();

    Restangular.setErrorInterceptor(errorResponseInterceptor);

    Restangular.addRequestInterceptor(function(element, operation, route, url) {
      $ionicLoading.show({
        template: gettextCatalog.getString('Loading...'),
        animation: 'fade-in',
        noBackdrop: false
      });
      return element;
    });

		// Make $settings global
		$rootScope.$settings = $settings;
		// Make $state global
		$rootScope.$state = $state;

    $rootScope.internetCall = internetCallService.call;

    $localStorage.$default({
      account: {},
      drinks: [],
      updated: new Date()
    });

    $rootScope.$on('gettextLanguageChanged', function () {
      $rootScope.lang = angular.copy(gettextCatalog.currentLanguage);
    });

    // todo set up user's language
    $rootScope.lang = angular.copy(gettextCatalog.currentLanguage);

    // Log app info
		$log.info('AVM ' + $settings.version +
			'; Debug: ' + $settings.debug +
			'; Build Date: ' + $settings.buildDate);

		// Show loading on state changes
		(function () {
			$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        $ionicLoading.show({
          template: gettextCatalog.getString('Loading...'),
          animation: 'fade-in',
          noBackdrop: false
        });
			});
			$rootScope.$on('$stateChangeSuccess', function () {
        $ionicLoading.hide();
			});
			$rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        $ionicLoading.hide();
				$log.error(error.message);
			});
			$rootScope.$on('$stateNotFound', function () {
        $ionicLoading.hide();
			});
			$rootScope.$on('$serverError', function () {
        $ionicLoading.hide();
			});
			$rootScope.$on('$transitionSuccess', function () {
        $ionicLoading.hide();
			});
      $rootScope.$on('$viewContentLoaded', function () {
        $ionicLoading.hide();
      });
			$rootScope.$on('$transitionError', function (error) {
        $ionicLoading.hide();
        $log.error(error.message);
			});
		})();

		// Google analytics users activity tracking
//		$rootScope.$on('$stateChangeSuccess', function (event, data) {
//			if (_.isFunction($window.ga) && data.name.indexOf('manager.') === -1) {
//				$window.ga('send', 'pageview', { page: $location.path() });
//			}
//		});

    // Set permission check on state loading.
    accessManager.init();

    AdMobService.createBanner();
	});


//	// Init intercom
//	.run(function (intercom) {
//		intercom.init();
//	});
