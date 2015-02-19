angular.module('avm.components')
  .service('AdMobService', function ($q, $settings, $window) {
    var self = this;
    var position = 8; // AdMob.AD_POSITION.BOTTOM_CENTER;
    var created = false;

    self.isPluginAvailable = function () {
      return !!$window.AdMob;
    };

    self.createBanner = function () {
      if (!created && self.isPluginAvailable()) {
        $window.AdMob.createBanner({
          adId: $settings.adMobId,
          position: position,
          autoShow: false
        }, function () {
          created = true;
        });
      }
    };

    self.showBanner = function () {
      if (!created && self.isPluginAvailable()) {
        self.createBanner();
      }
      if (created) {
        $window.AdMob.showBanner(position);
      }
    };

    self.hideBanner = function () {
      if (created) {
        $window.AdMob.hideBanner();
      }
    };
  });