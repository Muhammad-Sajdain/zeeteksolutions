// Counter JS
$.fn.jQuerySimpleCounter = function( options ) {
	    var settings = $.extend({
	        start:  0,
	        end:    100,
	        easing: 'swing',
	        duration: 400,
	        complete: ''
	    }, options );

	    var thisElement = $(this);

	    $({count: settings.start}).animate({count: settings.end}, {
			duration: settings.duration,
			easing: settings.easing,
			step: function() {
				var mathCount = Math.ceil(this.count);
				thisElement.text(mathCount);
			},
			complete: settings.complete
		});
	};


$('#number1').jQuerySimpleCounter({end: 400,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 500,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 100,duration: 3000});
// Testimonials Slider JS
jQuery("#testi-carousel").owlCarousel({
  autoplay: true,
  rewind: false, /* use rewind if you don't want loop */
  margin: 20,
  loop: true,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  dots: true,
  nav: false,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 2
    },

    1024: {
      items: 2
    },

    1366: {
      items: 3
    }
  }
});

// Portfolio Slider JS
jQuery("#port-carousel").owlCarousel({
  autoplay: true,
  rewind: false, /* use rewind if you don't want loop */
  margin: 20,
  loop: true,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  dots: true,
  nav: false,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 2
    },

    1024: {
      items: 2
    },

    1366: {
      items: 5
    }
  }
});

// ANIMATION
AOS.init({
  duration: 1200,
})
    