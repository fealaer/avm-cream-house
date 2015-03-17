angular.module('avm.components')
  .service('backButton', function ($state, account, $window, toastService, gettextCatalog, $ionicLoading) {
    var self = this;
    var counter = 0;
    var lastCall;

    self.backButton = function (event) {
      event.preventDefault();
      event.stopPropagation();

      if ($state.is('auth.login') || $state.is('menu.drinks')) {
        if (counter && lastCall) {
          var passed = event.timeStamp - lastCall;
          if (!(passed < 300 || passed > 3000)) {
            $window.navigator.app && $window.navigator.app.exitApp && $window.navigator.app.exitApp();
          } else if (passed > 3000) {
            lastCall = event.timeStamp;
          }
        } else {
          counter++;
          lastCall = event.timeStamp;
          toastService.showLongCenter(gettextCatalog.getString('Press again to exit.'));
        }
      } else {
        var toGo;

        if ($state.includes('auth') && !$state.is('auth.login')) {
          self.resetCounter();
          toGo = 'auth.login';
        } else if ($state.is('menu.ingredients') || $state.is('menu.drinks.item')) {
          toGo = 'menu.drinks';
        } else if ($state.is('menu.ingredients.item')) {
          toGo = 'menu.ingredients';
        } else if ($state.includes('base')) {
          toGo = 'menu.drinks';
        } else {
          toGo = account.getState();
        }

        self.resetCounter();

        $state.go(toGo);
        $ionicLoading.hide();
      }
      return false;
    };

    self.resetCounter = function () {
      counter = 0;
    };
  });