/**
 * Created by hieunc on 19/01/2016.
 */

require.config({
	paths: {
		"angular": "../vendor/node_modules/angular/angular",
		"angularRoute": "../vendor/node_modules/angular-route/angular-route",
		"angularCssInjector": "../vendor/node_modules/angular-css-injector/angular-css-injector",
		"app": "app",
		"modulesUser": [
			"../app/modules/user/controller/module.user.controller",
			"../app/modules/user/service/module.user.service"
		],
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
				'modulesUser'
			]
		},
		"modulesUser": {
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