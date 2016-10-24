
$(document).ready(function(){


	var img_pos = $('.catalog-name > img');

	$(window).on('load resize', function() {
		menu_change();
		placeholder_Menu_inside_cat_Reset();

		if ( $(window).width() > 1009 ) {
			$('.hide-nav').removeAttr('style');
			$('.navigation > li > a').removeClass('active');
		}

		if ( $(document).width() < 977 ) {
			$('.about h3').after(img_pos);
		} else {
			$('.catalog-name').append(img_pos);
		}

	});
	

	$('.flex-footer > div').matchHeight();

	function placeholder_Menu_inside_cat_Reset() {
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
			$('.sidebar-filter').removeAttr('style');
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



	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		autoHeight: true,
		navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

	$('.slider-2').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		autoHeight: true,
		navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
		responsive:{
			0:{
				items:1
			},
			380: {
				items: 2
			},
			500: {
				items: 3
			},
			600: {
				items: 4
			},
			783: {
				items: 5
			},
			914: {
				items: 6
			},
			1213: {
				items:7
			},
			1334:{
				items:8
			},
			1615:{
				items:10
			}
		}
	});


	$('.slider-3').owlCarousel({
		loop:true,
		margin:1,
		nav:true,
		navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			1020:{
				items:3
			}
		}
	});

	

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
		if ($(document).width() < 753) {
			$(this).next().slideToggle();
		}
	});








});
