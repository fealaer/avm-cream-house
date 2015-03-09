angular.module('avm.components')
  .service('AdMobService', function ($q, $settings, $window, toastService) {
    var self = this;
    var position = 8; // AdMob.AD_POSITION.BOTTOM_CENTER;
    var created = false;
    var prepared = false;
    var config;

    if( /(android)/i.test(navigator.userAgent) ) {
      config = $settings.adMob.android;
    } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
      config = $settings.adMob.ios;
    }

    self.isPluginAvailable = function () {
      return !!$window.AdMob;
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