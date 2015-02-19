'use strict';

angular.module('avm.modules')
  .controller('LeftMenuCtrl', function($scope, gettextCatalog, $ionicSideMenuDelegate, account, $rootScope, $localStorage) {
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

    $scope.$storage = $localStorage;
    $scope.account = account;

    $scope.leftMenu = {lang: gettextCatalog.currentLanguage};

    $scope.changeLang = function () {
      gettextCatalog.setCurrentLanguage($scope.leftMenu.lang);
      $localStorage.locale.source = 'user';
      $ionicSideMenuDelegate.toggleLeft();
    };
  });