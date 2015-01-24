'use strict';

angular.module('avm.account')

  .controller('ProfileCtrl', function ($scope, account, $state, gettextCatalog) {

    $scope.account = account.getAccountData();

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