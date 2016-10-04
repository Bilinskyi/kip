
$(document).ready(function(){

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
		
	}


	$('.phone-main').on('click', function(e) {
		e.preventDefault(); 
		$(this).next().slideToggle();
		$(this).toggleClass('act');
	});

	$('.phone-hide span').on('click', function(e) {
		e.preventDefault(); 
		$(this).closest('.phone-wrapp').find('.phone-main').removeClass('act');
		var old = $('.phone-display').text();
		$('.phone-display').text($(this).text());
		$(this).text(old);
		$('.phone-hide').slideUp();
	});

	$('.owl-carousel').owlCarousel({
		singleItem: true,
		navigation : true, 
		slideSpeed : 300,
		paginationSpeed : 400,
		navigationText: false,
		autoPlay: 20000,
		mouseDrag : false,
		pagination: false,
		touchDrag : false
	});

$('.slider-2').owlCarousel({
		items : 10,
    itemsDesktop : [1399,5],
    itemsDesktopSmall : [980,4],
    itemsTablet: [768,3],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    singleItem : false,
		pagination : false, 
		navigation : true, 
		slideSpeed : 300,
		paginationSpeed : 400,
		navigationText: false,
		autoPlay: 20000,
		mouseDrag : false,
		touchDrag : false
	});


$('.slider-3').owlCarousel({
		items : 3,
    itemsDesktop : [1399,3],
    itemsDesktopSmall : [976,2],
    itemsTablet: [768,2],
    itemsTabletSmall: false,
    itemsMobile : [680,1],
    singleItem : false,
		pagination : false, 
		navigation : true, 
		slideSpeed : 300,
		paginationSpeed : 400,
		navigationText: false,
		autoPlay: 20000,
		mouseDrag : false,
		touchDrag : false
	});


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