angular.module('avm.components')
  .service('gaService', function ($q, $settings, $window) {
    var self = this;
    var created = false;

    self.isPluginAvailable = function () {
      return !!$window.analytics;
    };

    self.create = function () {
      if (!created && self.isPluginAvailable()) {
        $window.analytics.startTrackerWithId($settings.gaId);
        created = true;
      }
    };

    self.trackView = function (page) {
      if (!created && self.isPluginAvailable()) {
        self.create();
      }
      if (created) {
        $window.analytics.trackView(page);
      }
    };

    self.trackEvent = function (category, action, label, value) {
      if (!created && self.isPluginAvailable()) {
        self.create();
      }
      if (created) {
        // Label and Value are optional, Value is numeric
        $window.analytics.trackEvent(category, action, label, value);
      }
    };

    self.trackException = function (userId) {
      if (!created && self.isPluginAvailable()) {
        self.create();
      }
      if (created) {
        $window.analytics.trackException('Description', false);
      }
    };

    self.setUserId = function (userId) {
      if (!created && self.isPluginAvailable()) {
        self.create();
      }
      if (created) {
        $window.analytics.setUserId(userId);
      }
    };

  });