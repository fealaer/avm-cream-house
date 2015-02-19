angular.module('avm.components')
  .service('internetCallService', function (gettextCatalog, $window) {
    var self = this;

    self.call = function (cb) {
      if (navigator.connection.type !== Connection.NONE) {
        if (arguments.length === 2) {
          cb(arguments[1]);
        } else {
          cb();
        }
      } else {
        if ($window.plugins && $window.plugins.toast) {
          $window.plugins.toast.showLongCenter(gettextCatalog.getString('Internet connection is not available.'));
        }
      }
    };
  });