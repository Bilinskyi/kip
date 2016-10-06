
$(document).ready(function(){

	$(window).on('load resize', function() {
		menu_change();
		search_button();
	});
	$(window).resize(function() {
		resizeSlider();
		resizeSlider2();
		
	});


	function search_button() {
		$('.form-search').on('click', function(e) {
			if ($(window).width() < 753) {
				if (!$(this).hasClass('act2')) {
					$(this).addClass('act2');
					$('.form-search input:not([type=submit])').slideToggle().css({
						display: 'block',
						position: 'absolute',
						left: 0,
						top: '40px',
						zIndex: 2,
						paddingLeft: '15px',
						background: '#003453'
					});
				}
			}

		});
		$('.form-search').mouseleave(function() {
			if ($(window).width() < 753) {
				$('.form-search input:not([type=submit])').slideUp(300, function() {
					$('.form-search').removeClass('act2');
					$(this).removeAttr('style');
				});
			}
		});
	};


	var menu_top = $('.top-menu li');
	function menu_change() {
		if ($(window).width() < 753) {
			$('.navigation').append(menu_top);
		} else {
			$('.top-menu').append(menu_top);
		};
	};


	$('.cmn-toggle-switch').on('click', function(e) {
		e.preventDefault(); 
		$(this).toggleClass('active');
		$(this).next().slideToggle();
	});


	if ( $(window).width()<768 ) {
		$('.navigation > li.arrow > a').on('click', function(e) {
			e.preventDefault(); 
			$(this).toggleClass('active').next().slideToggle(); 
		});

		$('.hide-nav h3').on('click', function(e) {
			e.preventDefault(); 
			$(this).next().slideToggle();
		});
		
	};


	$('.phone-hide span').on('click', function(e) {
		e.preventDefault(); 
		var old = $('.phone-display').text();
		$('.phone-display').text($(this).text());
		$('.phone-wrapp + a').attr( 'href', 'tel:' + $(this).text() );
		$(this).text(old);
	});


	$('.owl-carousel').bxSlider({
		responsive:true,
		adaptiveHeight: true,
		minSlides: 1,
		maxSlides: 1,
		slideMargin: 0,
		moveSlides: 1,
		pager: false,
		autoHover: false,
		speed: 500,
		pause: 3000,
		controls: true,
		nextText:'<i class="fa fa-chevron-right" aria-hidden="true"></i>',
		prevText:'<i class="fa fa-chevron-left" aria-hidden="true"></i>'
	});


	function countItems() {
		var width = $(window).width();
		if (width < 400) {
			item = 1;
		} else if (width < 600) {
			item = 2;
		} else if (width < 768) {
			item = 3;
		} else if (width < 1000) {
			item = 4;
		} else if (width < 1200) {
			item = 6;
		} else if (width < 1320) {
			item = 7;
		} else if (width < 1600){
			item = 8;
		} else {
			item = 10;
		}
	};
	countItems();

	var carousel = $('.slider-2').bxSlider({
		responsive:true,
		adaptiveHeight: true,
		minSlides: item,
		maxSlides: item,
		responsive: true,
		slideWidth: 140,
		slideMargin: 5,
		moveSlides: 1,
		pager: false,
		autoHover: false,
		speed: 500,
		pause: 3000,
		controls: true,
		nextText:'<i class="fa fa-chevron-right" aria-hidden="true"></i>',
		prevText:'<i class="fa fa-chevron-left" aria-hidden="true"></i>'
	});

	function resizeSlider() {
		countItems();
		carousel.reloadSlider({
			responsive:true,
			adaptiveHeight: true,
			minSlides: item,
			maxSlides: item,
			responsive: true,
			slideWidth: 140,
			slideMargin: 5,
			moveSlides: 1,
			pager: false,
			autoHover: false,
			speed: 500,
			pause: 3000,
			controls: true,
			nextText:'<i class="fa fa-chevron-right" aria-hidden="true"></i>',
			prevText:'<i class="fa fa-chevron-left" aria-hidden="true"></i>'
		});
	}




	function countItems2() {
		var width = $(window).width();
		if (width < 753) {
			item2 = 1;
		} else if (width < 1005) {
			item2 = 2;
		} else if (width >= 900) {
			item2 = 3;
		};
	};
	countItems2();
	var carousel2 = $('.slider-3').bxSlider({
		responsive:true,
		adaptiveHeight: true,
		minSlides: item2,
		maxSlides: item2,
		// infiniteLoop: false,
		slideWidth: 1000,
		responsive: true,
		slideMargin: 0,
		moveSlides: 1,
		pager: false,
		autoHover: false,
		speed: 500,
		pause: 3000,
		controls: true,
		nextText:'<i class="fa fa-chevron-right" aria-hidden="true"></i>',
		prevText:'<i class="fa fa-chevron-left" aria-hidden="true"></i>'
	});

	function resizeSlider2() {
		countItems2();
		carousel2.reloadSlider({
			responsive:true,
			adaptiveHeight: true,
			minSlides: item2,
			maxSlides: item2,
			// infiniteLoop: false,
			slideWidth: 1000,
			responsive: true,
			slideMargin: 0,
			moveSlides: 1,
			pager: false,
			autoHover: false,
			speed: 500,
			pause: 3000,
			controls: true,
			nextText:'<i class="fa fa-chevron-right" aria-hidden="true"></i>',
			prevText:'<i class="fa fa-chevron-left" aria-hidden="true"></i>'
		});
	}


	$('.grid i').on('click', function(e) {
		e.preventDefault(); 
		if (!$(this).hasClass('active') ) {
			$('.sorting i').removeClass('active');
			$(this).addClass('active');
		};
		if ( $('.grid i:last-child').hasClass('active') ) {
			$('.catalog-list').addClass('list');
		} else {
			$('.catalog-list').removeClass('list');
		}
	});





	// $('.slider-3').owlCarousel({
	// 	items : 3,
	// 	itemsDesktop : [1399,3],
	// 	itemsDesktopSmall : [976,2],
	// 	itemsTablet: [768,2],
	// 	itemsTabletSmall: false,
	// 	itemsMobile : [680,1],
	// 	singleItem : false,
	// 	pagination : false, 
	// 	navigation : true, 
	// 	slideSpeed : 300,
	// 	paginationSpeed : 400,
	// 	navigationText: false,
	// 	autoPlay: 20000,
	// 	mouseDrag : false,
	// 	touchDrag : false
	// });


	$('.flex-footer-item h4').on('click', function(e) {
		e.preventDefault(); 
		$(this).next().slideToggle();
	});

// $('header a[href^="#"]').on('click', function(event) {

//     var target = $( $(this).attr('href') );

//     if( target.length ) {
//         event.preventDefault();
//         $('html, body').animate({
//             scrollTop: target.offset().top -85
//         }, 600);
//     }

// });

//  jQuery(function($){ 
//    $(".phone_mask_1").mask("+7(999) 999-9999");
//    $("#phone_mask_2").mask("+7(999) 999-9999");
// });

});