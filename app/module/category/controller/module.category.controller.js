/**
 *  @project: offixial-ext
 *  @uthor: hieunc.
 *  @created 20/01/2016.
 */
angular.module('module.category.controller', []).
controller('create', function ($rootScope, $scope, $location) {
	$scope.go = function (path) {
		$location.path(path);
	};

	//category model
	$scope.category = {name: '', abbr_cd: ''};

});