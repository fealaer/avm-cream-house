'use strict';

angular.module('avm.auth')

  .controller('LoginCtrl', function ($scope, account, $state, gettextCatalog, $timeout) {
    var defaultData = {
      email: '',
      password: ''
    };

    $scope.data = angular.copy(defaultData);

    $scope.errorMessages = [];

    $scope.login = function () {
      account.login($scope.data)
        .then(function (response) {
          $timeout(function(){
            $state.go('menu.drinks');
            $scope.data = angular.copy(defaultData);
          });
        });
    };
  });