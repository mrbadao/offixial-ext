/**
 * Created by hieunc on 05/01/2016.
 */
angular.module('officialChromeApp', [
	'angular.css.injector',
	'ui.router',
	'modules.user.controllers',
	'modules.media.controllers'
], function ($provide) {
	$provide.decorator('$window', function ($delegate) {
		$delegate.history = null;
		return $delegate;
	});
}).
constant("Config", {
	"url": "http://localhost/api-official/api/",
	"appIco": {
		"ico_128": "resources/img/app_icon_128.png",
		"ico_16": "resources/img/app_icon_16.png"
	},
	modules: {
		user: {
			cssFiles: [
				"app/modules/user/resources/css/login.css"
			]
		},
		media: {
			cssFiles: [
				"app/modules/media/resources/css/media.css"
			]
		}
	}
}).
config([
	'$stateProvider',
	'$urlRouterProvider',
	'$httpProvider',
	'cssInjectorProvider',
	function ($stateProvider, $urlRouterProvider, $httpProvider, cssInjectorProvider) {
		$httpProvider.defaults.useXDomain = true;
		delete $httpProvider.defaults.headers.common['X-Requested-With'];

		cssInjectorProvider.setSinglePageMode(true);

		$urlRouterProvider.otherwise("/home");
		$stateProvider
				.state('home', {
					url: "/home",
					templateUrl: "app/modules/user/views/login.html",
					controller: "userCtrl"
				})
				.state('media', {
					url: "/media",
					//templateUrl: "app/modules/media/views/media.html",
					template: '<h1>msdia</h1>',
					controller: "mediaCtrl"
				})
				.state('media.create', {
					url: "/media/create",
					//templateUrl: "app/modules/media/views/create.html",
					template: '<h1>create</h1>',
					controller: "mediaCtrl"
				});

	}]).
run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
}]);