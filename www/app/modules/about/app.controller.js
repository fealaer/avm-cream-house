angular.module('avm.about')
	.controller('AboutAppCtrl', function($rootScope, $scope, gettextCatalog, $localStorage) {

    $scope.$storage = $localStorage;

    $scope.linkedin = function () {
      window.open('https://linkedin.com/in/fealaer', '_system');
    };

    $scope.googleplus = function () {
      window.open('https://plus.google.com/+AndreyPushkarev', '_system');
    };

    $scope.twitter = function () {
      window.open('https://twitter.com/fealaer', '_system');
    };

    $scope.facebook = function () {
      window.open('https://facebook.com/fealaer', '_system');
    };

    $scope.callTo = function (number) {
      window.open('tel:' + number, '_system');
    };

    $scope.mailTo = function (email) {
      window.open('mailTo:' + email, '_system');
    };

    $scope.github = function () {
      window.open('https://github.com/fealaer', '_system');
    }
	});