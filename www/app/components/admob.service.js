angular.module('avm.components')
  .service('AdMobService', function ($q, $settings, $window) {
    var self = this;
    var position = 8; // AdMob.AD_POSITION.BOTTOM_CENTER;
    var created = false;
    var prepared = false;
    var platform;
    var config;

    self.setUpConfig = function () {
      if (!platform) {
        platform = $window.device.platform;
        if (/(android)/i.test(platform)) {
          config = $settings.adMob.android;
        } else if (/(ios)/i.test(platform)) {
          config = $settings.adMob.ios;
        }
      }
    };

    self.isPluginAvailable = function () {
      if (!!$window.AdMob && !!$window.device) {
        self.setUpConfig();
        return true;
      }
      return false;
    };

    self.setOptions = function (options) {
      $window.AdMob.setOptions(options);
    };

    self.createBanner = function () {
      if (!created && self.isPluginAvailable()) {
        $window.AdMob.createBanner({
          adId: config.banner,
          position: position,
          autoShow: false
        }, function () {
          created = true;
        });
      }
    };

    self.prepareInterstitial = function () {
      if (!prepared && self.isPluginAvailable()) {
        self.setOptions({
          bannerId: config.banner,
          interstitialId: config.interstitial,
          position: position,
          autoShow: false
        });
        $window.AdMob.prepareInterstitial({});
        prepared = true;
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

    self.removeBanner = function () {
      if (created) {
        $window.AdMob.removeBanner();
      }
    };

    self.showInterstitial = function () {
      if (!prepared && self.isPluginAvailable()) {
        self.prepareInterstitial();
      }
      if (prepared) {
        $window.AdMob.showInterstitial();
      }
    };
  });