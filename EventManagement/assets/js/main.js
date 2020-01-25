(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {
		
		/* Slider Item Slide
		============================*/
		$(".slider").owlCarousel({
			items: 1,
			autoplay: false,
			loop: true,
			nav: false,
			dots: true,
			smartSpeed: 500
		});
		
		
		/* One Page Nav
		============================*/
		$('.mainmenu ul').onePageNav({
			currentClass: 'current',
			changeHash: false,
			scrollSpeed: 750,
			scrollThreshold: 0.5,
			easing: 'swing',
			scrollOffset: 60
		});
		/* Gallery Section
		============================*/
		  /* mesonary 
		========================  */
		var $grid = $('.gallery-active').isotope({
		  itemSelector: '.grid-item',
		  percentPosition: true,
		  masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: 1
		  }
		})
		// filter items on button click(for button)
		$('.gallry-menu').on( 'click', 'button', function() {
		  var filterValue = $(this).attr('data-filter');
		  $grid.isotope({ filter: filterValue });
		});
		
		 /* Active Js */
		$('.gallry-menu button').on('click', function(event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});	
		/* Home-services-carousel
		============================*/
		  $(".home-services-carousel").owlCarousel({
			autoplay: false,
			dots: true,
			loop: true,
			items: 3
		  });

		/* testimonials-carousel
		============================*/
		  $(".testimonials-carousel").owlCarousel({
			autoplay: true,
			dots: true,
			loop: true,
			items: 1
		  });
		


		  
		  var owl = $('.owl-carousel');
		  owl.owlCarousel({
			  loop: true,
			  items: 1,
			  thumbs: true,
			  thumbImage: true,
			  thumbContainerClass: 'owl-thumbs',
			  thumbItemClass: 'owl-thumb-item',
			  animateOut: 'fadeOut'
		  });  
	  



			  /* Review */
			$(".freelancer-review").on("click", function(){
		        $(".modal-overlay-2").addClass("fade-in");
		        $(".modal-full-content-2").addClass("modal-show");
		    });
			$(".modal-header span i").on("click", function() {
		        $(".main-modal-overlay, .modal-overlay-2").removeClass("fade-in");
		        $(".modal-full-content, .modal-full-content-2").removeClass("modal-show");
		    });
	
		  	// reviews
			 $(".reply-form").hide();
				$(".comment-reply").on("click", function() {
					$(this).siblings(".reply-form").show();
				});
				$(".close-form i").on("click", function() {
					$(this).parent().parent(".reply-form").hide();
				});
					
				
			});


	jQuery(window).load(function () {

		/* Sticky Header
		============================*/
		$(window).on('scroll', function () {
			if ($(this).scrollTop() > 20) {
				$('.header-fixed').addClass("sticky");
			} else {
				$('.header-fixed').removeClass("sticky");
			}
		});

		/* Preloader Active
		============================*/
		
	});
}(jQuery));