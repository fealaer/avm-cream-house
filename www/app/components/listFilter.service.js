'use strict';

angular.module('avm.components')
  .service('listFilter', function ($rootScope, gettextCatalog) {
    var self = this;

    var defFilter = {
      filter: {},
      order: {
        by: 'name.' + gettextCatalog.currentLanguage,
        reverse: false
      }
    };

    var filters = {
      drinks: defFilter,
      ingredients: defFilter
    };

    /**
     * Retrieves current filter by listName
     * @param listName
     * @returns {*}
     */
    self.get = function (listName) {
      return filters[listName] || defFilter;
    };

    /**
     * Set up filter for listName
     * @param listName
     * @param filter
     * @returns {*}
     */
    self.set = function (listName, filter) {
      if (listName && filter) {
        filters[listName] = filter;
        $rootScope.$broadcast('filterChanged');
      }
    };

    $rootScope.$on('gettextLanguageChanged', function () {
      var by = 'name.' + gettextCatalog.currentLanguage;
      defFilter = {
        filter: {},
        order: {
          by: by,
          reverse: false
        }
      };
      if (~filters.drinks.order.by.indexOf('name.')) {
        filters.drinks.order.by = by;
      }
      if (~filters.ingredients.order.by.indexOf('name.')) {
        filters.ingredients.order.by = by;
      }
      $rootScope.$broadcast('filterChanged');
    });
  });