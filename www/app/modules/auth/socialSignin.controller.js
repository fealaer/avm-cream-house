'use strict';

angular.module('avm.auth')

  .controller('SigninSocialCtrl', function ($scope, account, $state, gettextCatalog, $timeout, toastService) {

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
        toastService.showLongCenter(gettextCatalog.getString('You have successfully registered.'));
        $state.go('menu.drinks');
      });
    }
  });