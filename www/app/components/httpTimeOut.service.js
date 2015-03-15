angular.module('avm.components')
  .service('httpTimeOut', function ($settings, $timeout, gettextCatalog, toastService, $ionicLoading) {
    var self = this;
    var task = null;

    self.setUp = function () {
      task = $timeout(function () {
        $ionicLoading.hide();
        toastService.showLongCenter(gettextCatalog.getString('Could not receive response from server in a reasonable time. Check your internet connection and try again.'));
      }, $settings.httpTimeout);
      return task;
    };

    self.cancel = function () {
      if (task) {
        $timeout.cancel(task);
        task = null;
      }
    };
  });