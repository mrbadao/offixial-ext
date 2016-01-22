/**
 *  @project: offixial-ext
 *  @uthor: hieunc.
 *  @created 19/01/2016.
 */
angular.module("officialChromeExt.service", []).
factory("baseService", function ($http, Config) {
	var services = {};

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


	return services;
});