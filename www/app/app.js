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

	.run(function ($rootScope, $settings, $log, $timeout, $cacheFactory, $location, $window, $state, gettextCatalog, accessManager, Restangular, errorResponseInterceptor, $localStorage, AdMobService, $ionicLoading, internetCallService, cordovaHelper, gaService) {
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

    Restangular.addResponseInterceptor(function( data, operation, what, url, response, deferred) {
      $timeout($ionicLoading.hide, 500);
      return data;
    });

		// Make $settings global
		$rootScope.$settings = $settings;
		// Make $state global
		$rootScope.$state = $state;

    $rootScope.internetCall = internetCallService.call;
    $rootScope.trackEvent = gaService.trackEvent;

    $localStorage.$default({
      account: {},
      drinks: {},
      updated: new Date(),
      locale: {lang: 'en', source: 'default'}
    });

    gettextCatalog.setCurrentLanguage($localStorage.locale.lang);
    $rootScope.lang = angular.copy(gettextCatalog.currentLanguage);

    $rootScope.$on('gettextLanguageChanged', function () {
      $rootScope.lang = angular.copy(gettextCatalog.currentLanguage);
      $localStorage.locale.lang = angular.copy(gettextCatalog.currentLanguage);
    });

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
    $rootScope.$on('$stateChangeSuccess', function (event, data) {
      gaService.trackView($location.path());
    });

    // Set permission check on state loading.
    accessManager.init();

    if (document.addEventListener) {
      document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
      }, false);

      document.addEventListener('deviceready', function () {
        console.log('deviceready');

        AdMobService.prepareAds();

        $timeout(function () {
          if (!$state.includes('auth')) {
            AdMobService.showBanner();
          }
        }, 10000);

        if ($localStorage.locale.source === 'default' && navigator.globalization) {
          navigator.globalization.getLocaleName(function(locale){
            var lang = locale.value.slice(0, 2);
            var languages = ['en', 'ru'];
            if (_.contains(languages, lang)) {
              gettextCatalog.setCurrentLanguage(lang);
              $localStorage.locale.source = 'globalization';
              $rootScope.trackEvent('setUp', 'lang', lang);
            }
          });
        }

        if (!cordovaHelper.isConnected() && navigator.notification) {
          navigator.notification.alert(
            gettextCatalog.getString('Your device has no data connection.\n' +
              'App will attempt to show cached data where possible.\n' +
              'Functions which use data connection disabled.'),
            function () {},
            gettextCatalog.getString('Not Online')
          );
        }

        if ($localStorage.account.email) {
          gaService.setUserId($localStorage.account.email);
        }
      }, false);
    }
	});
