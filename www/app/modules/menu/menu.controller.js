angular.module('avm.menu')
	.controller('MenuCtrl', function($rootScope, $scope, $ionicModal, listFilter, $state, gettextCatalog, ratingService, account, AdMobService, toastService) {
		var defData = {
			rate: 2,
			comment: ''
		};

		$scope.toTry = function (item) {
			$scope.item = item;
			$scope.data = angular.copy(defData);
      $rootScope.trackEvent('button', 'click', 'To Try');
			openModal();
		};

		$scope.toSave = function (item) {
      var data = {
        id: item.id,
        isSaved: item.isSaved
      };

      $rootScope.trackEvent('button', 'click', 'To Save');

      account.saveDrink(data)
        .then(function (response) {
          item.isSaved = !item.isSaved;
          account.setAccountData(response.result);
          var message = item.isSaved ?
            gettextCatalog.getString('You have successfully add drink into bookmarks.') :
            gettextCatalog.getString('You have successfully removed drink from bookmarks.');
          toastService.showLongCenter(message);
        });
		};

		$scope.drinksWith = function (item) {
			var filter = {
				filter: {
					ingredients: item.id
				},
				order: {
					by: 'name.' + gettextCatalog.currentLanguage,
					reverse: false
				}
			};
      $rootScope.trackEvent('button', 'click', 'Drinks With');
			listFilter.set('drinks', filter);
			$state.go('menu.drinks');
		};

    $scope.moreComments = function (item) {
      $rootScope.trackEvent('button', 'click', 'More comments');
      // todo implementation
    };

		$scope.save = function () {
			closeModal();
			if ($scope.data) {
        $scope.data.id = $scope.item.id;

				ratingService.rate($scope.data)
          .then(function (response) {
            toastService.showLongCenter(gettextCatalog.getString('You have successfully marked drink as tasted.'));
            $scope.item.isTried = true;
            $scope.item.rate = response.result.rate;
            $scope.item.totalComments = response.result.totalComments;
            account.tried($scope.item.id);
            $scope.item.comments = _.union(response.result.comments, $scope.item.comments);
          });
			}
		};

		$scope.cancel = function () {
			closeModal();
		};

		$ionicModal.fromTemplateUrl('app/components/tryDrink.modal.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function (modal) {
			$scope.modal = modal;
		});


		//Cleanup the modal when we're done with it!
		$scope.$on('$destroy', function () {
			$scope.modal.remove();
		});
		// Execute action on hide modal
		$scope.$on('modal.hidden', function () {
			// Execute action
		});
		// Execute action on remove modal
		$scope.$on('modal.removed', function () {
			// Execute action
		});
		function openModal () {
			$scope.modal.show();
		}
		function closeModal () {
			$scope.modal.hide();
		}

    AdMobService.showBanner();
	});