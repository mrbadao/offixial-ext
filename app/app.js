/**
 *  @project: offixial-ext
 *  @uthor: hieunc.
 *  @created 19/01/2016.
 */

angular.module('officialChromeExt', [
	'ngRoute',
	'angular.css.injector',
	'modules.user.controller'
], function ($provide) {
	$provide.decorator('$window', function ($delegate) {
		$delegate.history = null;
		return $delegate;
	});
}).constant("Config", {
	"url": "http://localhost/api-official/api/",
	"appIco": {
		"ico_128": "resources/img/app_icon_128.png",
		"ico_16": "resources/img/app_icon_16.png"
	},
	modules: {
		default: {
			cssFiles: [
				"vendor/node_modules/bootstrap/dist/css/bootstrap.min.css",
				"vendor/node_modules/bootstrap/dist/css/bootstrap-theme.min.css"
			]
		},
		user: {
			login: {
				cssFiles: [
					"app/assets/css/user/login.css"
				]
			}
		},
		media: {
			login: {
				cssFiles: [
					"app/modules/media/resources/css/media.css"
				]
			}
		}
	}
}).
config([
	'$routeProvider',
	'$httpProvider',
	'cssInjectorProvider',
	function ($routeProvider, $httpProvider, cssInjectorProvider) {
		$httpProvider.defaults.useXDomain = true;
		delete $httpProvider.defaults.headers.common['X-Requested-With'];

		cssInjectorProvider.setSinglePageMode(true);

		$routeProvider
				.when("/login", {
					caseInsensitiveMatch: true,
					templateUrl: "app/modules/user/view/login.html",
					module: "user",
					controller: "login"
				})
				.otherwise({redirectTo: '/login'});
	}
]).
run([
	'$rootScope',
	'cssInjector',
	'Config',
	function ($rootScope, cssInjector, Config) {
		$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
			if (typeof current.$$route != "undefined") {
				angular.forEach(Config.modules.default.cssFiles, function (css, idx) {
					cssInjector.add(css);
				});

				if (typeof current.$$route.module != "undefined" &&
						typeof current.$$route.controller != "undefined" &&
						typeof Config.modules[current.$$route.module] != "undefined" &&
						typeof Config.modules[current.$$route.module][current.$$route.controller] != "undefined"
				) {
					angular.forEach(Config.modules[current.$$route.module][current.$$route.controller].cssFiles, function (css, idx) {
						cssInjector.add(css);
					});
				}
			}
		})
	}
]);