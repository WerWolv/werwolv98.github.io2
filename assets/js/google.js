(function($) {
	function onSignIn(googleUser) {
		var profile = googleUser.getBasicProfile();
		console.log('Name:' + profile.getName());
	}
})(jQuery);