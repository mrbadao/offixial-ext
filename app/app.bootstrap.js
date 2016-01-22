/**
 * Created by hieunc on 19/01/2016.
 */

require.config({
	baseUrl: 'app',
	paths: {
		"angular": "../vendor/node_modules/angular/angular",
		"angularRoute": "../vendor/node_modules/angular-route/angular-route",
		"angularCssInjector": "../vendor/node_modules/angular-css-injector/angular-css-injector",

		"chromeServiceStorage": "lib/chrome/service/storage",
		//"angularCssInjector": "../vendor/node_modules/angular-css-injector/angular-css-injector",

		"moduleUser": "module/user/module.user",
		"moduleUserController": "module/user/controller/module.user.controller",
		"moduleUserService": "module/user/service/module.user.service",

		"moduleCategory": "module/category/module.category",
		"moduleCategoryController": "module/category/controller/module.category.controller",
		"moduleCategoryService": "",

		"appService": "app.service",
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
		"chromeServiceStorage": [
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

		"moduleCategoryController": {
			deps: [
				'angular',
				'chromeServiceStorage'
			]
		},
		"moduleCategoryService": {
			deps: [
				'angular'
			]
		},
		"moduleCategory": {
			deps: [
				'angular',
				'moduleCategoryController',
				//'moduleUserService'
			]
		},
		"appService": [
			'angular'
		],
		"app": {
			deps: [
				'angular',
				'angularRoute',
				'angularCssInjector',
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