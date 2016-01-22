/**
 * Created by hieunc on 19/01/2016.
 */

require.config({
	baseUrl: 'app',
	paths: {
		"bootstrap": "../vendor/node_modules/bootstrap/dist/js/bootstrap.min",
		"jquery": "../vendor/node_modules/jquery/dist/jquery.min",

		"angular": "../vendor/node_modules/angular/angular",
		"angularRoute": "../vendor/node_modules/angular-route/angular-route",
		"angularCssInjector": "../vendor/node_modules/angular-css-injector/angular-css-injector",

		"chromeService": "lib/chrome/service/lib.chrome.service",
		"chromeServiceStorage": "lib/chrome/service/storage/lib.chrome.service.storage",
		"chromeServiceNotification": "lib/chrome/service/notification/lib.chrome.services.notification",

		"moduleUser": "module/user/module.user",
		"moduleUserController": "module/user/controller/module.user.controller",
		"moduleUserService": "module/user/service/module.user.service",

		"moduleCategory": "module/category/module.category",
		"moduleCategoryController": "module/category/controller/module.category.controller",
		"moduleCategoryService": "module/category/service/module.category.service",

		"appService": "app.service",
		"app": "app"
	},
	shim: {
		//Boottrap
		"bootstrap": [
			'jquery'
		],

		//Angular
		"angularRoute": [
			'angular'
		],
		"angularCssInjector": [
			'angular'
		],

		//chrome service
		"chromeServiceStorage": [
			'angular'
		],
		"chromeServiceNotification": [
			'angular'
		],
		"chromeService": [
			'angular',
			'chromeServiceStorage',
			'chromeServiceNotification'
		],

		// my user module
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

		//my category module
		"moduleCategoryController": {
			deps: [
				'angular',
				'chromeServiceStorage'
			]
		},
		"moduleCategoryService": {
			deps: [
				'angular',
				'appService'
			]
		},
		"moduleCategory": {
			deps: [
				'angular',
				'moduleCategoryController',
				'moduleCategoryService'
			]
		},

		//Main app
		"appService": [
			'angular',
			'chromeService'
		],
		"app": {
			deps: [
				'angular',
				'angularRoute',
				'angularCssInjector',
				'bootstrap',
				"appService",
				'moduleUser',
				'moduleCategory'
			]
		}


	}
})
;

require([
	'app'
], function () {
	angular.bootstrap(document, ['officialChromeExt']);
});