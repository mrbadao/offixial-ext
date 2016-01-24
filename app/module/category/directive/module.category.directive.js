/**
 *  @project: offixial-ext
 *  @uthor: hieunc.
 *  @created 20/01/2016.
 */
angular.module('module.category.directive', [])
		.directive("gecategorieslist", function () {
			return {
				restrict: "E",
				templateUrl: "app/shared/view/sidebar/sidebar.html"
			}
		})
		.directive("additems", function () {
			return {
				restrict: "E",
				templateUrl: "app/module/category/view/element/sidebar.items.html"
			};
		});
