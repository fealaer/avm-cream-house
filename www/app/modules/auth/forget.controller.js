'use strict';

angular.module('avm.auth')

  .controller('ForgetCtrl', function ($scope, account, $state, gettextCatalog, $timeout) {
    var defaultData = {
      email: ''
    };

    $scope.data = angular.copy(defaultData);

    $scope.errorMessages = [];

    $scope.forget = function () {
      $scope.data = angular.copy(defaultData);
      $scope.errorMessages = [];
    };
  });