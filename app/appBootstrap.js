/**
 * Created by hieunc on 19/01/2016.
 */

require.config({
	baseUrl: 'app',
	paths: {
		"angular": "../vendor/node_modules/angular/angular",
		"angularRoute": "../vendor/node_modules/angular-route/angular-route",
		"angularCssInjector": "../vendor/node_modules/angular-css-injector/angular-css-injector",

		"chromeServiceStorage": "lib/chrome/services/storage",
		//"angularCssInjector": "../vendor/node_modules/angular-css-injector/angular-css-injector",

		"moduleUser": "module/user/module.user",
		"moduleUserController": "module/user/controller/module.user.controller",
		"moduleUserService": "module/user/service/module.user.service",

		"app": "app",
		"bootstrap": []
	},
	shim: {
		"angularRoute": [
			'angular'
		],
		"angularCssInjector": [
			'angular'
		],
		"moduleUserController": {
			deps: [
				'angular',
				'chromeServiceStorage'
			]
		},
		"moduleUserService": {
			deps: [
				'angular'
			]
		},
		"moduleUser": {
			deps: [
				'angular',
				'moduleUserController',
				'moduleUserService'
			]
		},
		"app": {
			deps: [
				'angular',
				'angularRoute',
				'angularCssInjector',
				'moduleUser'
			]
		}


	}
})
;

require([
	'app'
], function () {
	//angular.element(document).ready(function() {
	angular.bootstrap(document, ['officialChromeExt']);
	//});
	//angular.bootstrap(document, ['officialChromeExt']);
});