/**
 *  @project: offixial-ext
 *  @uthor: hieunc.
 *  @created 20/01/2016.
 */
angular.module('module.category', [
	'module.category.controller',
	'module.category.service',
	'module.category.directive'
]).run([
	'$rootScope',
	'$location',
	'Config',
	'categoryService',
	function ($rootScope, $location, Config, categoryService) {
		$rootScope.items = [];
		$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
			categoryService.getApiKey().then(function (apiKey) {
						categoryService.getCategoriesRequest(apiKey)
								.then(function (d) {
									if (d.status == 200) {
										switch (d.data.status) {
											case 200:
												$rootScope.items = [];
												angular.forEach(d.data.data, function (category, idx) {
													for (var i = 0; i < category.CategoryName.length; i++) {
														if (category.CategoryName[i].lang_id == Config.lang) {
															category.Category.name = category.CategoryName[i].name;
															$rootScope.items.push(category);
															console.log(category.Category.name);
															break;
														}
													}
												});
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
		});
	}
]);