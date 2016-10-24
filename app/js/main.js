
$(document).ready(function(){

	$(window).on('load resize', function() {
		menu_change();
		placeholder_Menu_inside_cat()
	});
	
	$(window).resize(function() {
		resizeSlider();
		resizeSlider2();

	});

	$('.flex-footer > div').matchHeight();



	
	function placeholder_Menu_inside_cat() {
		var cat_mobile = $('.xs-cat-mobile');
		if ($(window).width() < 753) {
			$('.slideToggle').attr('placeholder', '');

			if ( $('.cat-mobile').length == 0 ) {
				$('.links-right').before('<div class="cat-mobile"><div class="name-cat">КАТЕГОРИИ</div></div>');
			}
			$('.cat-mobile').prepend(cat_mobile);

		} else {
			$('.slideToggle').attr('placeholder', 'Поисковый запрос').removeAttr('style');
			$('.logo').removeAttr('style');
			$('.nav-main').before(cat_mobile);
			$('.btn-search').addClass('active');
			$('.btn-close').removeClass('active');
		}
	}

	$(document).on('click', '.slideToggle', function() {
		if ($(window).width() < 753) {
			if ( $('.btn-search').hasClass('active') ) {
				$('.btn-search').removeClass('active');
				$('.btn-close').addClass('active');
				$('.slideToggle').animate({
					width: '100%'
				}, 500).attr('placeholder', 'Поисковый запрос');
				$('.logo').animate({
					opacity: '0'
				}, 300);
			}; 
		}
	});

	$(document).on('click', '.btns div',  function() {
		if ($(window).width() < 753) {
			$(this).removeClass('active').siblings().addClass('active');
			if ( $(this).hasClass('btn-search') ) {
				$('.slideToggle').animate({
					width: '100%'
				}, 500).attr('placeholder', 'Поисковый запрос');
				$('.logo').animate({
					opacity: '0'
				}, 300);
			} else {
				$('.slideToggle').animate({
					width: '50%'
				}, 500).attr('placeholder', '');;
				$('.logo').animate({
					opacity: '1'
				}, 400);
			}
		} else {
			$('.slideToggle').slideToggle(200);
		}
	});





	var menu_top = $('.top-menu li');
	function menu_change() {
		if ($(window).width() < 1010) {
			$('.navigation').append(menu_top);
		} else {
			$('.top-menu').append(menu_top);
		};
	};


	$('.js-filter-toggle').on('click', function(e) {
		e.preventDefault(); 
		$(this).toggleClass('active');
		$('.sidebar-filter').slideToggle();
	});

	$(document).on('click', '.cat-mobile', function(e) {
		e.preventDefault(); 
		$(this).toggleClass('active');
		$('.xs-cat-mobile').toggleClass('active');
		$('.nav-main').slideToggle();
	});

	$(document).on('click', '.container-fluid + .xs-cat-mobile', function(e) {
		e.preventDefault(); 
		$(this).toggleClass('active');
		$('.nav-main').slideToggle();
	});

	$('.navigation > li.arrow > a').on('click', function(e) {
		e.preventDefault(); 
		if ( $(window).width()<1010 ) {
			$(this).toggleClass('active').next().slideToggle(); 
		};
	});

	$('.hide-nav h3').on('click', function(e) {
		e.preventDefault(); 
		if ( $(window).width()<1010 ) {
			$(this).next().slideToggle();
		};
	});



	$('.phone-hide span').on('click', function(e) {
		e.preventDefault(); 
		var old = $('.phone-display').text();
		$('.phone-display').text($(this).text());
		$('.phone-wrapp + a').attr( 'href', 'tel:' + $(this).text() );
		$(this).text(old);
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
		infiniteLoop: false,
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
			infiniteLoop: false,
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
		if ( $('.grid i:first-child').hasClass('active') ) {
			$('.catalog-list').addClass('list');
		} else {
			$('.catalog-list').removeClass('list');
		}
	});



	$('.flex-footer-item h4').on('click', function(e) {
		e.preventDefault(); 
		$(this).next().slideToggle();
	});

});
