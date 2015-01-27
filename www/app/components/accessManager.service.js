'use strict';

angular.module('avm.components')

  .service('accessManager', function ($rootScope, account, $state, gettextCatalog, $timeout) {
    var self = this;

    var validators = {
      /**
       * Compares user authentication status with provided value
       * @param {boolean} value
       * @returns {boolean}
       */
      logged: function (value) {
        return account.isAuthenticated() === value;
      }
    };

    /**
     * Checks all validation rules
     * @param {object} rules
     * @param {boolean} factor Defines how to check, true - allow, false - deny
     * @returns {boolean}
     */
    var check = function (rules, factor) {
      var allowed = true;
      for (var validator in rules) {
        if (!validators.hasOwnProperty(validator)) {
          throw new Error('There is no "' + validator + '" access validator.');
        }
        var value = rules[validator];

        var result = validators[validator](value);

        allowed = (result === factor);
        if (!allowed) {
          return false;
        }
      }

      return allowed;
    };

    /**
     * Initializes hook on state change & deny access if there is no permissions
     */
    self.init = function () {
      $rootScope.$on('$stateChangeStart', function (e, to) {
        var allow = {},
          deny = {},
          chunks = to.name.split('.'),
          allowed = true,
          canAlert = to.accessAlert;

        // Get rules from parent states
        for (var i = 0; i < chunks.length; i++) {
          var stateName = chunks.slice(0, i + 1).join('.');
          var state = $state.get(stateName);

          if (angular.isDefined(state.allow)) {
            angular.extend(allow, state.allow);
          }
          if (angular.isDefined(state.deny)) {
            angular.extend(deny, state.deny);
          }
        }

        if (allow) {
          allowed = check(allow, true);
        }
        if (allowed && deny) {
          allowed = check(deny, false);
        }

        if (!allowed) {
          e.preventDefault();

          var toGo = account.isAuthenticated() ? 'menu.drinks' : 'login';
          if (!$state.is(toGo)) {
            $timeout(function(){
              $state.go(toGo);
            });
          }

          if (canAlert !== false && account.isAuthenticated()) {
            $rootScope.$broadcast('$serverError', gettextCatalog.getString('You do not have permission to perform this action.'));
          }
        }
      });
    };
  });
