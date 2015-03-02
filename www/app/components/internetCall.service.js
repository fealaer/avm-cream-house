angular.module('avm.components')
  .service('internetCallService', function (gettextCatalog, $window, cordovaHelper, toastService) {
    var self = this;

    self.call = function (cb) {
      if (cordovaHelper.isConnected()) {
        if (arguments.length === 2) {
          cb(arguments[1]);
        } else {
          cb();
        }
      } else {
        toastService.showLongCenter(gettextCatalog.getString('Internet connection is not available.'));
      }
    };
  });