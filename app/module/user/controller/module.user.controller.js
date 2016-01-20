/**
 *  @project: offixial-ext
 *  @uthor: hieunc.
 *  @created 19/01/2016.
 */
angular.module('module.user.controller', [
	'lib.chrome.service',
	'module.user.service'
]).
controller("login", function ($scope, storage, userService) {
	storage.get("Auth", function (object) {
		if (typeof object.Auth != 'undefined') {
			var promiseCheckToken = userService.checkToken(object.Auth.api_access_key);
			promiseCheckToken.then(function (d) {
				if (d.data.status == 200 && d.data.data == object.Auth.api_access_key) {
					//$location.path("/category");
					console.log(1);
				}
			}, function (d) {
				console.log(d);
			});
		}
	});
	$scope.user = {
		username: 'hieunc',
		password: '123456'
	};
	$scope.loginResultData = {};

	$scope.loginFormSubmit = function () {
		var promiseLoginRequest = userService.loginRequest($scope.user);
		promiseLoginRequest.then(function (d) {
			console.log(2);
			if (d.status == 200) {
				$scope.loginResultData = d.data;
				switch ($scope.loginResultData.status) {
					case 200:
						console.log($scope.loginResultData);
						storage.remove("Auth", null);
						storage.set({"Auth": $scope.loginResultData.data}, null);
						//$location.path("/category");
						break;
					default:
						$scope.loginForm.$setValidity("loginFailed", false);
						break;
				}
			} else {
				console.log(d.status);
			}
		});
	};
});