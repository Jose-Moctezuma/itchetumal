$(document).ready(function () {

	$('.one-time').slick({
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		adaptiveHeight: true,
		adaptiveWidth: true,
		autoplay: true,
		autoplaySpeed: 6000,
		arrows: false,
		fade: true,
		pauseOnHover: true
	});

	$('.center').slick({
		dots: false,
		infinite: true,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 4000,
		centerMode: false,
		centerPadding: '0px',
		slidesToShow: 4,
		responsive: [{
			breakpoint: 768,
			settings: {
				centerMode: true,
				centerPadding: '0px',
				slidesToShow: 2
			}
		},{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '0px',
				slidesToShow: 2
			}
		}]
	});

	$('.anexo').slick({
		dots: false,
		infinite: true,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 3500,
		slidesToShow: 4,
		pauseOnHover: true,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		},{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerPadding: '0px',
				slidesToShow: 2
			}
		}]
	});

});
