/**
 * Created by hieunc on 05/01/2016.
 */
//function lauch() {
//	chrome.app.window.create('index.html', {
//		'id': 'main',
//		'outerBounds': {
//			'minWidth': 1170,
//			'minHeight': 600,
//			'maxWidth': 1170,
//			'maxHeight': 600
//		},
//		//frame: 'none'
//	});
//}
//
//function showNotification(storedData) {
//	// Now create the notification
//	chrome.notifications.create('chromeNotificationId', {
//		type: 'basic',
//		iconUrl: 'resources/img/app_icon_128.png',
//		title: 'Don\'t forget!',
//		message: 'You have  things to do. Wake up, dude!'
//	}, function (notificationId) {
//	});
//}
//
//chrome.app.runtime.onLaunched.addListener(lauch);


chrome.app.runtime.onLaunched.addListener(function () {
	// normal launch initiated by the user, let's start clean.
	// note that this is not related to the persistent state, which is
	// appropriately handled in the window code.
	runApp(false);
});

chrome.app.runtime.onRestarted.addListener(function () {
	// if restarted, try to get the transient saved state
	runApp(true);
});

function runApp(readInitialState) {
	chrome.app.window.create('index.html',
			{
				'id': 'main',
				'outerBounds': {
					'minWidth': 1170,
					'minHeight': 600,
					'maxWidth': 1170,
					'maxHeight': 600
				}
			},
			// the create callback gets a reference to the AppWindow obj
			function (win) {
				// when the callback is executed, the DOM is loaded but no script was
				// loaded yet. So, let's attach to the load event.
				win.contentWindow.addEventListener('load', function () {
					//if (readInitialState) {
					//	win.contentWindow.setInitialState();
					//} else {
					//	win.contentWindow.clearInitialState();
					//}
				});
			});
}