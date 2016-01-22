/**
 *  @project: offixial-ext
 *  @uthor: hieunc.
 *  @created 20/01/2016.
 */
angular.module('module.category.controller', [
	'module.category.service'
]).
controller('create', function ($rootScope, $scope, $location, categoryService) {
	$scope.go = function (path) {
		$location.path(path);
	};

	//category model
	$scope.data = {
		"Category": {},
		"CategoryName": [],
		"CategorySeoLink": []
	};

	$scope.apiResponseError = {
		hasError: false,
		errors: []
	};

	angular.forEach($rootScope.langs, function (lang, idx) {
		$scope.data.CategoryName[idx] = {name: ''};
		$scope.data.CategorySeoLink[idx] = {abbr_cd: ''};
	});

	$scope.submitNewCategory = function () {
		categoryService.getApiKey().then(function (apiKey) {
					categoryService.createCategoryRequest(
							apiKey,
							{data: $scope.data}
					).then(function (d) {
						console.log(d.data);
						if (d.status == 200) {
							switch (d.data.status) {
								case 200:

									break;
								default:
									$scope.apiResponseError.hasError = true;
									$scope.apiResponseError.errors = d.data.errors;
									break;
							}
						}
					}, function (d) {
						console.log(d);
					});
				}, function (code) {
					switch (code) {
						case '403':
							$location.path('/login');
							break;
						default:
							console.log(code);
							break;
					}
				}
		);
	};
});