(function() {
	"use strict";
	const ua = navigator.userAgent.toLowerCase();
	const isIos = ua.includes('iphone') || ua.includes('ipad');
	const isAndroid = ua.includes('android') && ua.includes('chrome');
	if (isIos || isAndroid) {
		document.getElementById('scpr').classList.add('unsupported');
	}
})();