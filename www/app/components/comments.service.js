'use strict';

angular.module('avm.components')
	.service('commentsService', function ($rootScope, Restangular, httpTimeOut) {
    var self = this;
    var url = 'comments';
    var comments = Restangular.one(url);

		self.loadMore = function (id, posted_at) {
      return comments.one(id, posted_at).withHttpConfig({timeout: httpTimeOut.setUp()}).get();
		};
	});