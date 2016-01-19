/**
 * Created by hieunc on 05/01/2016.
 */
angular.module("lib.chrome.services", [])
		.factory("storage", function () {
			var service = {};

			service.set = function (storegeObject, callback) {
				chrome.storage.sync.set(storegeObject, callback);
			};

			service.get = function (storegeKey, callback) {
				return chrome.storage.sync.get(storegeKey, callback);
			};

			service.remove = function (storegeKey, callback) {
				return chrome.storage.sync.remove(storegeKey, callback);
			};
			return service;
		});