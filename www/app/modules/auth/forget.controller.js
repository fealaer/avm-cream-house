'use strict';

angular.module('avm.auth')

  .controller('ForgetCtrl', function ($scope, account, $state, gettextCatalog, $timeout, toastService) {
    var defaultData = {
      email: ''
    };

    $scope.data = angular.copy(defaultData);

    function addStart(errMsg) {
      return (!!errMsg ? '\n' : '');
    }

    $scope.forget = function (form) {
      if (form.$valid) {
        account.forgot($scope.data)
          .then(function (response) {
            $timeout(function(){
              $state.go('auth.reset');
              $scope.data = angular.copy(defaultData);
              toastService.showLongCenter(gettextCatalog.getString('You have requested the reset of the password for your account.'));
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
        toastService.showLongCenter(errMsg);
      }
    };
  });