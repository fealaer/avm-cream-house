'use strict';

angular.module('avm.auth')

  .controller('ResetCtrl', function ($scope, account, $state, $timeout, gettextCatalog, toastService) {
    var defaultData = {
      token: '',
      password: '',
      confirm: ''
    };

    $scope.data = angular.copy(defaultData);

    function addStart(errMsg) {
      return (!!errMsg ? '\n' : '');
    }

    $scope.reset = function (form) {
      if (form.$valid) {
        account.reset($scope.data)
          .then(function (response) {
            $timeout(function(){
              $state.go('auth.login');
              $scope.data = angular.copy(defaultData);
              toastService.showLongCenter(gettextCatalog.getString('Your password has been changed.'));
            });
          });
      } else {
        var errMsg = '';
        if (form.token.$error.required) {
          errMsg += gettextCatalog.getString('Token is required.');
        }
        if (form.password.$error.required) {
          errMsg += addStart(errMsg) + gettextCatalog.getString('Password is required.');
        }
        if (form.password.$error.minlength) {
          errMsg += addStart(errMsg) + gettextCatalog.getString('Password must be at least 4 characters long.');
        }
        if ($scope.data.password !== $scope.data.confirm) {
          errMsg += addStart(errMsg) + gettextCatalog.getString('Passwords do not match.');
        }
        toastService.showLongCenter(errMsg);
      }
    };
  });