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
          $scope.data = angular.copy(defaultData);
          $timeout(function(){
            $state.go('menu.drinks');
          });
        })

        .catch(function (response) {
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
            supersonic.logger.error(err);
          });
          $scope.errorMessages = [];
        });
    };
  });