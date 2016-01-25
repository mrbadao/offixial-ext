/**
 *  @project: offixial-ext
 *  @uthor: hieunc.
 *  @created 20/01/2016.
 */
angular.module('module.category.controller', [
			'module.category.service',
			'module.category.directive'
		])
		.controller('create', function ($rootScope, $scope, $location, Config, categoryService, notification) {
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
				$scope.data.CategoryName[idx] = {name: '', lang_id: lang.Language.id};
				$scope.data.CategorySeoLink[idx] = {abbr_cd: '', lang_id: lang.Language.id};
			});

			$scope.submitNewCategory = function () {
				categoryService.getApiKey().then(function (apiKey) {
							categoryService.createCategoryRequest(
									apiKey,
									{data: $scope.data}
							).then(function (d) {
								if (d.status == 200) {
									switch (d.data.status) {
										case 200:
											notification.pushPotifications(
													Config.notificationIdConstant.CATEGORY.ID.replace('id', d.data.data.Category.id),
													'basic',
													Config.notificationIdConstant.CATEGORY.TITLE,
													Config.appIco.ico_128,
													Config.notificationIdConstant.CATEGORY.MSG
											);
											$scope.go('/category');
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
		})
		.controller('list', function ($location, $scope) {
			$scope.go = function (path) {
				$location.path(path);
			};
		})
		.controller('edit', function ($routeParams, $location, $rootScope, $scope, categoryService) {
			var id = $routeParams.id,
					apiKey = '';

			$scope.go = function (path) {
				$location.path(path);
			};

			//category model
			$scope.data = {
				"Category": {},
				"CategoryName": [],
				"CategorySeoLink": []
			};

			categoryService.getApiKey().then(function (apiKey) {
						apiKey = apiKey;
						categoryService.getCategoryRequest(
								apiKey,
								id
						).then(function (d) {
							if (d.status == 200) {
								switch (d.data.status) {
									case 200:
										$scope.data = d.data.data;
										break;
									default:
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

			$scope.submitCategory = function () {

			}
		});