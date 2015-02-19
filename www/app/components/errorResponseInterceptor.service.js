'use strict';

angular.module('avm.components')

  .factory('errorResponseInterceptor',
  function ($rootScope, account, $state, $log, gettextCatalog, $window, $ionicLoading) {
    return function (response, deferred) {
      var HTTP_BAD_REQUEST = 400,
        HTTP_UNAUTHORIZED = 401,
        HTTP_FORBIDDEN = 403,
        HTTP_NOT_FOUND = 404,
        HTTP_CONFLICT = 409,
        HTTP_INTERNAL_SERVER_ERROR = 500,
        HTTP_SERVICE_UNAVAILABLE = 503,
        toGo = $state.current.name,
        errorMsg = gettextCatalog.getString('Unexpected server error. Try perform this action later.'),
        errorMessages = [];

      $log.error('API Error. Response: ', response);

      switch (response.status) {
        case HTTP_UNAUTHORIZED:
        case HTTP_CONFLICT:
          if (account.isAuthenticated()) {
            errorMsg = gettextCatalog.getString('Authentication session expired.');
            account.logout();
            toGo = 'auth.login';
          }
          break;
        case HTTP_FORBIDDEN:
          toGo = account.getState();
          errorMsg = gettextCatalog.getString('You do not have permission to perform this action.');
          break;
        case HTTP_INTERNAL_SERVER_ERROR:
        case HTTP_SERVICE_UNAVAILABLE:
          break;
        case HTTP_BAD_REQUEST:
          if (response.data.error && response.data.error.errors) {
            _.each(response.data.error.errors, function (err) {
              errorMessages.push(gettextCatalog.getString(err.message));
            });
          }
          if (response.data.error && response.data.error.message) {
            errorMessages.push(gettextCatalog.getString(response.data.error.message));
          }
          break;
        case HTTP_NOT_FOUND:
          break;
        default:
          errorMsg = response.data.error.message || errorMsg;
      }

      if (!$state.is(toGo)) {
        $state.go(toGo);
      }

      $ionicLoading.hide();

      if ($window.plugins && $window.plugins.toast) {
        if (errorMessages) {
          _.each(errorMessages, function (err) {
            $window.plugins.toast.showLongCenter(err);
          });
        } else {
          $window.plugins.toast.showLongCenter(errorMsg);
        }
      }

      // Server errors list
      gettextCatalog.getString('Email is not valid.');
      gettextCatalog.getString('Account with that email address already exists.');
      gettextCatalog.getString('Password cannot be blank.');
      gettextCatalog.getString('Password must be at least 4 characters long.');
      gettextCatalog.getString('Password reset token is invalid or has expired.');
      gettextCatalog.getString('Passwords do not match.');
      gettextCatalog.getString('No account with that email address exists.');
      gettextCatalog.getString('Invalid email or password.');
      gettextCatalog.getString('User is not authenticated.');

      return false;
    };
  });