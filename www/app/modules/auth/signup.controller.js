'use strict';

angular.module('avm.auth')

  .controller('SignupCtrl', function ($scope, account, $state, gettextCatalog, $timeout, toastService) {
    var defaultData = {
      name: '',
      email: '',
      password: ''
    };

    $scope.data = angular.copy(defaultData);

    function addStart(errMsg) {
      return (!!errMsg ? '\n' : '');
    }

    $scope.signup = function (form) {
      if (form.$valid) {
      $scope.data.confirmPassword = $scope.data.password;
      account.signUpEmail($scope.data)
        .then(function (response) {
          $timeout(function(){
            toastService.showLongCenter(gettextCatalog.getString('You have successfully registered.'));
            $state.go('menu.drinks');
            account.setAccountData(response.result);
            $scope.data = angular.copy(defaultData);
          });
        });
      } else {
        var errMsg = '';
        if (form.name.$error.required) {
          errMsg += gettextCatalog.getString('Username is required.')
        }
        if (form.name.$error.pattern) {
          errMsg += addStart(errMsg) + gettextCatalog.getString('Username can contain only english letters and white spaces.');
        }
        if (form.password.$error.minlength) {
          errMsg += addStart(errMsg) + gettextCatalog.getString('Name must be at least 3 characters long.');
        }
        if (form.email.$error.required) {
          errMsg += addStart(errMsg) + gettextCatalog.getString('Email is required.');
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