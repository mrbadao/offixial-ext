/**
 *  @project: offixial-ext
 *  @uthor: hieunc.
 *  @created 19/01/2016.
 */
angular.module("app.service", [
	'lib.chrome.service'
]).
factory("baseService", function ($http, $q, Config, storage) {
	var services = {};

	services.getApiKey = function () {
		var deferred = $q.defer();
		storage.get("Auth", function (object) {
			if (typeof object.Auth != 'undefined') {
				deferred.resolve(object.Auth.api_access_key);
			} else {
				deferred.reject('403');
			}
		});

		return deferred.promise;
	};

	//call getlanguages API
	services.getLanguages = function () {
		return $http({
			headers: {
				"Content-Type": "application/json"
			},
			dataType: "json",
			url: Config.url + "getlanguage"
		}).then(function successCallback(response) {
			return response;
		}, function errorCallback(response) {
			return response;
		});
	};

	services.checkToken = function (token) {
		return $http({
			headers: {
				"Content-Type": "application/json",
				"X-TOKEN": token
			},
			method: "POST",
			dataType: "json",
			url: Config.url + "users/checkToken"
		}).then(function successCallback(response) {
			return response;
		}, function errorCallback(response) {
			return response;
		});
	};

	return services;
});