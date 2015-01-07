angular.module('avm.about')
	.controller('AboutCtrl', function($rootScope, $scope) {
    $scope.foursquare = function () {
      window.open('https://foursquare.com/v/avm-cream-house/4f08447be4b0596c8e7424b0', '_system');
    };

    $scope.googleplus = function () {
      window.open('https://plus.google.com/108842111188829872345', '_system');
    };

    $scope.tripadvisor = function () {
      window.open('http://www.tripadvisor.com/Restaurant_Review-g612380-d6511503-Reviews-AVM_Cream_House-Weligama_Matara_Southern_Province.html', '_system');
    };

    $scope.lonelyplanet = function () {
      window.open('http://www.lonelyplanet.com/sri-lanka/the-south/weligama/restaurants/ice-cream-gelateria/avm-cream-house', '_system');
    };

    $scope.callTo = function (number) {
      window.open('tel:' + number, '_system');
    };

    $scope.mailTo = function (email) {
      window.open('mailTo:' + email, '_system');
    };

    $scope.openMap = function () {
      var platform = device.platform;
      if(platform == "Android"){
        window.open('geo://?q=AVM+Cream+House', '_system');
      }else if(platform == "iOS"){
        window.open('maps:q=5.973343,80.42926', '_system');
      }else{
        console.error("Unknown platform");
      }
    };
	});