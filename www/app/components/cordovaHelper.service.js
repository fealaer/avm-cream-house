angular.module('avm.components')
  .service('cordovaHelper', function ($window) {
    var self = this;

    self.isConnected = function () {
      return !!$window.Connection && !!navigator.connection && navigator.connection.type !== $window.Connection.NONE;
    }
  });