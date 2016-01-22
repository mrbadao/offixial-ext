/**
 * Created by hieunc on 05/01/2016.
 */
angular.module("lib.chrome.service.notification", [])
		.factory("notification", function () {
			var service = {};

			service.pushPotifications = function (notificationId, type, title, icon, content) {
				chrome.notifications.create(
						notificationId,
						{
							type: type,
							title: title,
							iconUrl: icon,
							message: content
						},
						function () {

						}
				);
				chrome.notifications.onClicked.addListener(function () {
					chrome.app.window.current().focus();
				});
			};
			return service;
		});