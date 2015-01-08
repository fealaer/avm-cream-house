'use strict';

angular.module('avm.menu.ingredients')
	.controller('IngredientsItemCtrl', function ($rootScope, $scope, item) {
		$scope.item = item;
    var lang = $rootScope.lang;

    $scope.wiki = function (wiki) {
      var url;
      if (wiki[lang]) {
        url = wiki[lang];
      } else {
        url = wiki.en;
      }
      window.open(url, '_system');
    }
	});
