'use strict';

angular.module('avm.components')
  .filter('join', function (gettextCatalog) {
    return function (array, splitter) {
      if (array && splitter) {
        if (_.isArray(array)) {
          return _.map(array, function(a) {
            return gettextCatalog.getString(a);
          }).join(splitter);
        } else if (_.isString(array)) {
          return gettextCatalog.getString(array);
        } else {
          return gettextCatalog.getString(array.toString());
        }
      } else {
        return '';
      }
    };
  });