/**
 *  @project: offixial-ext
 *  @uthor: hieunc.
 *  @created 19/01/2016.
 */
angular.module("module.category.service", [
	'app.service'
]).
factory("categoryService", function ($http, $location, Config, baseService) {
	var services = baseService;

	//call createCategory API
	services.createCategoryRequest = function (apiKey, categoryArrayData) {
		return $http({
			headers: {
				"Content-Type": "application/json",
				"X-TOKEN": apiKey
			},
			method: "POST",
			dataType: "json",
			url: Config.url + "category/createcategory",
			data: categoryArrayData
		}).then(function successCallback(response) {
			return response;
		}, function errorCallback(response) {
			return response;
		});
	};

	return services;
});