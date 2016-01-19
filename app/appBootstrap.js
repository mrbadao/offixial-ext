/**
 * Created by hieunc on 19/01/2016.
 */

require.config({
	baseUrl: 'app',
	paths: {
		"angular": "../vendor/node_modules/angular/angular",
		"angularRoute": "../vendor/node_modules/angular-route/angular-route",
		"angularCssInjector": "../vendor/node_modules/angular-css-injector/angular-css-injector",
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
		"app": {
			deps: [
				'angular',
				'angularRoute',
				'angularCssInjector',
				'moduleUser'
			]
		},
		"moduleUser": {
			deps: [
				'angular',
				'moduleUserController',
				'moduleUserService'
			]
		},
		"moduleUserController": {
			deps: [
				'angular'

			]
		},
		"moduleUserService": {
			deps: [
				'angular'
			]
		}

	}
});

require([
	'app'
], function () {
	angular.bootstrap(document, ['officialChromeExt']);
});