'use strict';

angular.module('avm.menu.ingredients')
	.controller('IngredientsItemCtrl', function ($rootScope, $scope, item, gettextCatalog) {
		$scope.item = item;
    var lang = gettextCatalog.currentLanguage;

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
