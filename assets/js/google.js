(function($) {
	function onSignIn(googleUser) {
		var profile = googleUser.getBasicProfile();
		alert('Name:' + profile.getName());
	}
})(jQuery);