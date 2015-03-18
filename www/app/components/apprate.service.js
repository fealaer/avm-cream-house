angular.module('avm.components')
  .service('appRate', function ($settings, $window, $localStorage) {
    var self = this;
    var platform;
    var config;

    self.setUpConfig = function () {
      $window.AppRate.preferences.storeAppURL.ios = $settings.appId.android;;
      $window.AppRate.preferences.storeAppURL.android = 'market://details?id=' + $settings.appId.ios;
      $window.AppRate.preferences.useLanguage = $localStorage.locale.lang;
    };

    self.isPluginAvailable = function () {
      if (!!$window.AppRate && !!$window.device) {
        self.setUpConfig();
        return true;
      }
      return false;
    };

    self.promptForRating = function () {
      if (self.isPluginAvailable()) {
        $window.AppRate.promptForRating(true);
      }
    };
  });