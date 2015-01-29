'use strict';

angular.module('avm.auth')

  .controller('SigninSocialCtrl', function ($scope, account, $state, gettextCatalog, $timeout) {

    $scope.signUpFacebook = function () {
      account.signUpFacebook()
        .then(successHandler)
        .catch(errorHandler);
    };
    $scope.signUpGoogle = function () {
      account.signUpGoogle()
        .then(successHandler)
        .catch(errorHandler);
    };
    $scope.signUpTwitter = function () {
      account.signUpTwitter()
        .then(successHandler)
        .catch(errorHandler);
    };

    function successHandler (response) {
      account.setAccountData(response.result);

      $timeout(function(){
        $state.go('menu.drinks');
      });
    }

    function errorHandler (response) {
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
    }
  });