'use strict';

angular.module('avm.components')
  .service('listFilter', function ($rootScope) {
    var self = this;

    var defFilter = {
      filter: {},
      order: {
        by: 'name.' + $rootScope.lang,
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
  });