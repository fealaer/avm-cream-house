'use strict';

(function () {
	if ('addEventListener' in document) {
		document.addEventListener('DOMContentLoaded', function() {
			FastClick.attach(document.body);
		}, false);
	}

	angular.element(document).ready(function () {
		angular.bootstrap(document, ['avm']);
	});
})();