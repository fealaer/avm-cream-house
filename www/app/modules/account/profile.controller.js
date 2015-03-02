'use strict';

angular.module('avm.account')

  .controller('ProfileCtrl', function ($rootScope, $scope, account, $state, gettextCatalog, $localStorage, toastService) {

    $scope.$storage = $localStorage;
    $scope.account = account;

    $scope.logout = function () {
      account.logout()
        .then(function () {
          toastService.showLongCenter(gettextCatalog.getString('You have successfully logged out.'));
          $state.go('auth.login');
          account.cleanAccountData();
        });
    };
  });