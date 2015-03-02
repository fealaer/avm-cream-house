'use strict';

angular.module('avm.auth')

  .controller('LoginCtrl', function ($scope, account, $state, gettextCatalog, $timeout, toastService) {
    var defaultData = {
      email: '',
      password: ''
    };

    $scope.data = angular.copy(defaultData);

    $scope.errorMessages = [];

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
        if (form.email.$error.required) {
          toastService.showLongCenter(gettextCatalog.getString('Email is required.'));
        }
        if (form.email.$error.email) {
          toastService.showLongCenter(gettextCatalog.getString('Email is not valid.'));
        }
        if (form.password.$error.required) {
          toastService.showLongCenter(gettextCatalog.getString('Password is required.'));
        }
        if (form.password.$error.minlength) {
          toastService.showLongCenter(gettextCatalog.getString('Password must be at least 4 characters long.'));
        }
      }
    };
  });