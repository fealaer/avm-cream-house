'use strict';

angular.module('avm.modules')
  .controller('LeftMenuCtrl', function($scope, gettextCatalog, $ionicSideMenuDelegate, account) {
    $scope.languages = [
      {
        value: 'en',
        label: 'English'
      },
      {
        value: 'ru',
        label: 'Русский'
      }
    ];

    $scope.account = account.getAccountData();

    $scope.leftMenu = {lang: gettextCatalog.currentLanguage};

    $scope.changeLang = function () {
      gettextCatalog.setCurrentLanguage($scope.leftMenu.lang);
      $ionicSideMenuDelegate.toggleLeft();
    }
  });