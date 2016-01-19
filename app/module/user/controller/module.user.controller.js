/**
 *  @project: offixial-ext
 *  @uthor: hieunc.
 *  @created 19/01/2016.
 */
angular.module('module.user.controller',[]).
controller("login", function ($scope) {
	$scope.user = {
		username: 'hieunc',
		password: '123456'
	};
	//$scope.loginResultData = {};
	//
	//$scope.loginFormSubmit = function () {
	//	var promiseLoginRequest = userService.loginRequest($scope.user);
	//	promiseLoginRequest.then(function (d) {
	//		if (d.status == 200) {
	//			$scope.loginResultData = d.data;
	//			switch ($scope.loginResultData.status) {
	//				case 200:
	//					chromeStorageSyncService.remove("Auth", null);
	//					chromeStorageSyncService.set({"Auth": $scope.loginResultData.data}, null);
	//					$location.path("/media");
	//					break;
	//				default:
	//					$scope.loginForm.$setValidity("loginFailed", false);
	//					break;
	//			}
	//		} else {
	//			console.log(d.status);
	//		}
	//	});
	//};
});