angular.module('avm.components')
  .service('backButton', function ($state, account, $window, toastService) {
    var self = this;
    var counter = 0;

    self.backButton = function (event) {
      event.preventDefault();

      if ($state.is('auth.login') || $state.is('menu.drinks')) {
        counter++;
      }
      if ($state.includes('auth') && !$state.is('auth.login')) {
        $state.go('auth.login');
      } else if ($state.is('menu.ingredients') || $state.is('menu.drinks.item')) {
        $state.go('menu.drinks');
      } else if ($state.is('menu.ingredients.item')) {
        $state.go('menu.ingredients');
      } else if (($state.is('auth.login') || $state.is('menu.drinks')) && counter === 2) {
        navigator.app && navigator.app.exitApp && navigator.app.exitApp();
      }
      // if base.* go to menu.drinks
      else if ($state.includes('base')) {
        $state.go('menu.drinks');
      } else {
        $state.go(account.getState());
      }
    };

    self.resetCounter = function () {
      counter = 0;
    };
  });