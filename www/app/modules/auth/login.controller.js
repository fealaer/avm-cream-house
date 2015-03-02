'use strict';

angular.module('avm.auth')

  .controller('LoginCtrl', function ($scope, account, $state, gettextCatalog, $timeout, toastService) {
    var defaultData = {
      email: '',
      password: ''
    };

    $scope.data = angular.copy(defaultData);

    function addStart(errMsg) {
      return (!!errMsg ? '\n' : '');
    }

    $scope.login = function (form) {
      if (form.$valid) {
        account.login($scope.data)
          .then(function (response) {
            $timeout(function () {
              $state.go('menu.drinks');
              $scope.data = angular.copy(defaultData);
            });
          });
      } else {
        var errMsg = '';
        if (form.email.$error.required) {
          errMsg += gettextCatalog.getString('Email is required.');
        }
        if (form.email.$error.email) {
          errMsg += addStart(errMsg) + gettextCatalog.getString('Email is not valid.');
        }
        if (form.password.$error.required) {
          errMsg += addStart(errMsg) + gettextCatalog.getString('Password is required.');
        }
        if (form.password.$error.minlength) {
          errMsg += addStart(errMsg) + gettextCatalog.getString('Password must be at least 4 characters long.');
        }
        toastService.showLongCenter(errMsg);
      }
    };
  });