angular.module('avm.components')
  .service('toastService', function ($window, $ionicLoading) {
    var self = this;

    self.isPluginAvailable = function () {
      return $window.plugins && $window.plugins.toast;
    };

    self.showShortTop = function (message) {
      if (self.isPluginAvailable()) {
        $ionicLoading.hide();
        $window.plugins.toast.showShortTop(message);
      }
    };

    self.showShortCenter = function (message) {
      if (self.isPluginAvailable()) {
        $ionicLoading.hide();
        $window.plugins.toast.showShortCenter(message);
      }
    };

    self.showShortBottom = function (message) {
      if (self.isPluginAvailable()) {
        $ionicLoading.hide();
        $window.plugins.toast.showShortBottom(message);
      }
    };

    self.showLongTop = function (message) {
      if (self.isPluginAvailable()) {
        $ionicLoading.hide();
        $window.plugins.toast.showShortTop(message);
      }
    };

    self.showLongCenter = function (message) {
      if (self.isPluginAvailable()) {
        $ionicLoading.hide();
        $window.plugins.toast.showLongCenter(message);
      }
    };

    self.showLongBottom = function (message) {
      if (self.isPluginAvailable()) {
        $ionicLoading.hide();
        $window.plugins.toast.showLongBottom(message);
      }
    };
  });