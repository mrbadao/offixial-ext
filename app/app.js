/**
 *  @project: offixial-ext
 *  @uthor: hieunc.
 *  @created 19/01/2016.
 */

angular.module('officialChromeExt', [
	'ngRoute',
	'angular.css.injector',
	'officialChromeExt.service',
	'module.user',
	'module.category'
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
				"vendor/node_modules/bootstrap/dist/css/bootstrap-theme.min.css",
				"app/assets/css/common.css"
			]
		},
		user: {
			login: {
				cssFiles: [
					"app/assets/css/user/login.css"
				]
			}
		},
		category: {
			create: {
				cssFiles: [
					"app/assets/css/category/category.css"
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
					templateUrl: "app/module/user/view/login.html",
					module: "user",
					controller: "login"
				})
				.when("/category", {
					caseInsensitiveMatch: true,
					templateUrl: "app/module/category/view/create.html",
					module: "category",
					controller: "create"
				})
				.otherwise({redirectTo: '/login'});
	}
]).
run([
	'$rootScope',
	'cssInjector',
	'Config',
	'baseService',
	function ($rootScope, cssInjector, Config, baseService) {
		baseService.getLanguages().then(function (d) {
			if (d.status == 200 && d.data.status == 200) {
				$rootScope.langs = d.data.data;
			}
			else {
				$rootScope.langs = {};
			}
		}, function (d) {
			console.log(d);
		});

		$rootScope.breadcrumb = [
			{
				label: "home",
				link: "/home"
			}
		];

		$rootScope.sidebar = [
			{icoClass: "glyphicon-home", location: 'home', link: "/home"},
			{icoClass: "glyphicon-th-list", location: 'category', link: "/category"},
			{icoClass: "glyphicon-pencil", location: 'article', link: "/article"},
			{icoClass: "glyphicon-film", location: 'media', link: "/media"},
			{icoClass: "glyphicon-cog", location: 'setting', link: "/setting"}
		];

		$rootScope.currLocation = 'home';

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
					$rootScope.currLocation = current.$$route.module;
					$rootScope.breadcrumb.push({
						label: current.$$route.module,
						link: current.$$route.originalPath
					}, {
						label: current.$$route.controller,
						link: ""
					});
				}
			}
		})
	}
]);