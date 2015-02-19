'use strict';

angular.module('avm.account')

  .controller('ProfileCtrl', function ($rootScope, $scope, account, $state, gettextCatalog, $localStorage) {

    $scope.$storage = $localStorage;
    $scope.account = account;

    $scope.logout = function () {
      account.logout()
        .then(function () {
          $state.go('auth.login');
          account.cleanAccountData();
        });
    };
  });