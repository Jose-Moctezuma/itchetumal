function googleTranslateElementInit() {
	new google.translate.TranslateElement({
		pageLanguage: 'es',
		autoDisplay: false,
		gaTrack: true,
		gaId: 'wewe',
		layout: google.translate.TranslateElement.InlineLayout.SIMPLE
	}, 'google_translate_element');
}
