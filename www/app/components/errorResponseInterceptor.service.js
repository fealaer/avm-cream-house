'use strict';

angular.module('avm.components')

  .factory('errorResponseInterceptor',
  function ($rootScope, account, $state, $log, gettextCatalog, $window) {
    var isActiveStateTransition = false;
    var transitionToState;

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      isActiveStateTransition = true;
      transitionToState = toState.name;
    });
    $rootScope.$on('$stateChangeSuccess', function () {
      isActiveStateTransition = false;
    });
    $rootScope.$on('$stateChangeError', function () {
      isActiveStateTransition = false;
    });
    $rootScope.$on('$stateNotFound', function () {
      isActiveStateTransition = false;
    });

    return function (response, deferred) {
      var Raven = $window.Raven || null,
        HTTP_BAD_REQUEST = 400,
        HTTP_UNAUTHORIZED = 401,
        HTTP_FORBIDDEN = 403,
        HTTP_NOT_FOUND = 404,
        HTTP_CONFLICT = 409,
        HTTP_INTERNAL_SERVER_ERROR = 500,
        HTTP_SERVICE_UNAVAILABLE = 503,
        toGo = 'login',
        errorMsg = gettextCatalog.getString('Unexpected server error. Try perform this action later.');

      $log.error('API Error. Response: ', response);

      switch (response.status) {
        case HTTP_UNAUTHORIZED:
          handle401case();
          return false;
        case HTTP_FORBIDDEN:
          toGo = 'menu.drinks';
          errorMsg = gettextCatalog.getString('You do not have permission to perform this action.');
          break;
        case HTTP_INTERNAL_SERVER_ERROR:
          if (Raven) {
            Raven.captureMessage('500 HTTP INTERNAL ERROR', {
              extra: {
                responseInfo: response.data.substr(0, 500),
                responseStatusText: response.statusText,
                requestURL: response.config.url,
                requestMethod: response.config.method,
                requestHeaders: response.config.headers,
                requestData: response.config.data
              }
            });
          }
          toGo = account.getState();
          break;
        case HTTP_SERVICE_UNAVAILABLE:
          toGo = 'error.serviceUnavailable';
          break;
        case  HTTP_BAD_REQUEST:
          // Validation error
          return true;
        case  HTTP_CONFLICT:
          // Handle it in formHelperService & action service.
          return true;
        case HTTP_NOT_FOUND:
          toGo = 'error.notFound';
          break;
        default:
          toGo = $state.current.name;
      }

      errorMsg = response.error.message || errorMsg;

      if (toGo.slice(0, 6) !== 'error.') {
        $rootScope.$broadcast('$serverError', errorMsg);
      }

      if (!$state.is(toGo) && !(isActiveStateTransition && transitionToState !== toGo)) {
        $state.go(toGo);
      }

      return true;

      function handle401case() {
        if (account.isAuthenticated()) {
          errorMsg = gettextCatalog.getString('Authentication session expired');
          account.logout();
        }

        if (!$state.is('login')) {
          $state.go('login');
        }

        $rootScope.$broadcast('$serverError', errorMsg);
      }
    };
  });