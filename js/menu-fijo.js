$(window).scroll(function () {
	posicionarMenu2();
	posicionarMenu();
});

function posicionarMenu2() {
	var altura_del_header = $('#barraGobmx').outerHeight(true) || 60;
	if ($(window).scrollTop() >= altura_del_header) {
		$('#main_navbar2').addClass('menublanco').css('top', altura_del_header + 'px');
	} else {
		$('#main_navbar2').removeClass('menublanco').css('top', '');
	}
}

function posicionarMenu() {
	var altura_del_header = $('#barraGobmx').outerHeight(true) || 60;
	var altura_del_menu_blanco = $('#main_navbar2').outerHeight(true) || 40;
	if ($(window).scrollTop() >= altura_del_header) {
		$('#main_navbar').addClass('menuazul').css('top', (altura_del_header + altura_del_menu_blanco) + 'px');
	} else {
		$('#main_navbar').removeClass('menuazul').css('top', '');
	}
}

