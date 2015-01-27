'use strict';

angular.module('avm.auth')

  .controller('SignupCtrl', function ($scope, account, $state, gettextCatalog, $timeout) {
    var defaultData = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };

    $scope.data = angular.copy(defaultData);

    $scope.errorMessages = [];

    $scope.signup = function () {
      $scope.data.confirmPassword = $scope.data.password;
      $scope.data.name = $scope.data.firstName + ' ' + $scope.data.lastName;

      account.signUpEmail($scope.data)

        .then(function (response) {
          account.setAccountData(response.result);

          $scope.data = angular.copy(defaultData);
          $timeout(function(){
            $state.go('menu.drinks');
          });
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
          $scope.errorMessages = [];
        });
    };
  });