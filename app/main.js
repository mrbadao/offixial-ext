/**
 * Created by hieunc on 19/01/2016.
 */

require.config({
	paths: {
		"angular": "../vendor/node_modules/angular/angular",
		"angularRoute": "../vendor/node_modules/angular-route/angular-route",
		"app": "app",
		"modulesUser": "../app/modules/user/controller/modules.user"
	},
	shim: {
		"angularRoute": [
			'angular',
		],
		"app": {
			deps: [
				'angular',
				'angularRoute',
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
	angular.bootstrap(document, ['app']);
});