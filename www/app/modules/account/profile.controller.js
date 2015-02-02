'use strict';

angular.module('avm.account')

  .controller('ProfileCtrl', function ($rootScope, $scope, account, $state, gettextCatalog, $localStorage) {

    $scope.$storage = $localStorage;
    $scope.account = account;

    $scope.logout = function () {
      account.logout()

        .then(function () {
          account.cleanAccountData();
          $state.go('login');
        })

        .catch(function (response) {
          console.log(response);
          if (response.error && response.error.errors) {
            _.each(response.error.errors, function (err) {
              $scope.errorMessages.push(gettextCatalog.getString(err.message));
            });
          }
          if (response.error && response.error.message) {
            $scope.errorMessages.push(gettextCatalog.getString(response.error.message));
          }
          if (_.isEmpty($scope.errorMessages)) {
            $scope.errorMessages.push(gettextCatalog.getString('Some error occurred'));
          }
          _.each($scope.errorMessages, function (err) {
            console.log(err);
          });
        });
    };
  });