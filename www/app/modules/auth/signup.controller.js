'use strict';

angular.module('avm.auth')

  .controller('SignupCtrl', function ($scope, account, $state, gettextCatalog, $timeout) {
    var defaultData = {
      name: '',
      email: '',
      password: ''
    };

    $scope.data = angular.copy(defaultData);

    $scope.errorMessages = [];

    $scope.signup = function () {
      $scope.data.confirmPassword = $scope.data.password;
      account.signUpEmail($scope.data)
        .then(function (response) {
          $timeout(function(){
            $state.go('menu.drinks');
            account.setAccountData(response.result);
            $scope.data = angular.copy(defaultData);
          });
        });
    };
  });