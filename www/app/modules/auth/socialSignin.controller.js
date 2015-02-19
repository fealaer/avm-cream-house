'use strict';

angular.module('avm.auth')

  .controller('SigninSocialCtrl', function ($scope, account, $state, gettextCatalog, $timeout) {

    $scope.signUpFacebook = function () {
      account.signUpFacebook()
        .then(successHandler);
    };
    $scope.signUpGoogle = function () {
      account.signUpGoogle()
        .then(successHandler);
    };
    $scope.signUpTwitter = function () {
      account.signUpTwitter()
        .then(successHandler);
    };

    function successHandler (response) {
      account.setAccountData(response.result);

      $timeout(function(){
        $state.go('menu.drinks');
      });
    }
  });