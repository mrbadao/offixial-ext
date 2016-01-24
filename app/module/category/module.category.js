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
		$rootScope.items = {};
		categoryService.getApiKey().then(function (apiKey) {
					categoryService.getCategoriesRequest(apiKey)
							.then(function (d) {
								if (d.status == 200) {
									switch (d.data.status) {
										case 200:
											$rootScope.items = d.data.data;
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
	}
]);