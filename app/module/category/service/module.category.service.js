/**
 *  @project: offixial-ext
 *  @uthor: hieunc.
 *  @created 19/01/2016.
 */
angular.module("module.category.service", [
	'app.service'
]).factory("categoryService", function ($http, $location, Config, baseService) {
	var services = baseService;

	//call createCategory API
	services.createCategoryRequest = function (apiKey, categoryArrayData) {
		console.log(categoryArrayData);
		return $http({
			headers: {
				"Content-Type": "application/json; charset=utf-8",
				"Accept": "application/json; charset=utf-8",
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

	//call getCaterories API
	services.getCategoriesRequest = function (apiKey) {
		return $http({
			headers: {
				"Content-Type": "application/json; charset=utf-8",
				"Accept": "application/json; charset=utf-8",
				"X-TOKEN": apiKey
			},
			method: "POST",
			dataType: "json",
			url: Config.url + "category/getcategories"
		}).then(function successCallback(response) {
			return response;
		}, function errorCallback(response) {
			return response;
		});

	};

	return services;
});