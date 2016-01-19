/**
 *  @project: offixial-ext
 *  @uthor: hieunc.
 *  @created 19/01/2016.
 */

angular.module('officialChromeExt', [
	'ngRoute',
	'modules.user'
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
	'$routeProvider',
	'$httpProvider',
	//'cssInjectorProvider',
	function ($routeProvider, $httpProvider) {
		$httpProvider.defaults.useXDomain = true;
		delete $httpProvider.defaults.headers.common['X-Requested-With'];

		//cssInjectorProvider.setSinglePageMode(true);

		$routeProvider
				.when("/login", {
					caseInsensitiveMatch: true,
					templateUrl: "app/modules/user/view/login.html",
					controller: "login"
				})
				//.when("/media", {
				//	title: "Official CMS login",
				//	caseInsensitiveMatch: true,
				//	templateUrl: "app/modules/media/views/media.html",
				//	controller: "mediaCtrl"
				//})
				.otherwise({redirectTo: '/login'});
	}
]);

//		.
//run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
//	$rootScope.$state = $state;
//	$rootScope.$stateParams = $stateParams;
//}]);