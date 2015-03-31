/*******************************************************************************
	@Author			Jaspalsinh Chauhan (Jsinh)
	@Website		http://www.jsinh.in
	@Last Update	02:12 AM Wednesday, April 01, 2015

	TABLE CONTENTS
	-------------------------------
    01. Init - Document ready - jQuery
		02. Needy-Ghost main function call
		03. Apply loader GIF
    04. Apply Fit-Vids responsivness
		05. Apply Back-to-top link on scroll

*******************************************************************************/

/* 01. Init - Document ready - jQuery
*******************************************************************************/
jQuery(window).ready(function () {
	NeedyGhost();
});

/* 02. Needy-Ghost main function call
*******************************************************************************/
function NeedyGhost() {
	ApplyLoader();
	ApplyFitVids();
	ApplyBackToTop();
}

/* 03. Apply loader GIF
*******************************************************************************/
function ApplyLoader() {
	/* # Show loader untill everything's loaded. */
	$('.loader').show();

	$(window).load(function() {
			/* # All loaded, hide loader. */
			$('.loader').hide();
		});
}

/* 04. Apply Fit-Vids responsivness
*******************************************************************************/
function ApplyFitVids() {
	/* # Apply FIT-VIDS responsiveness */
  $(".post-content").fitVids();
}

/* 05. Apply Back-to-top link on scroll
*******************************************************************************/
function ApplyBackToTop() {
	var offset = 220;
	var duration = 500;
	jQuery(window).scroll(function() {
			if (jQuery(this).scrollTop() > offset) {
					jQuery('.back-to-top').fadeIn(duration);
			} else {
					jQuery('.back-to-top').fadeOut(duration);
			}
	});

	jQuery('.back-to-top').click(function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
	});
}













/*
(function ($) {
    "use strict";

    $(document).ready(function(){
*/
        /* Make specific links open in a new window in a HTML5 valid way */
        /*$('a[rel*="external"]').click(function(){
          $(this).attr('target', '_blank');
        });

        function casperFullImg() {
            $("img").each( function() {
                var contentWidth = $(".post-content").outerWidth(); // Width of the content
                var imageWidth = $(this)[0].naturalWidth; // Original image resolution

                if (imageWidth >= contentWidth) {
                    $(this).addClass('full-img');
                } else {
                    $(this).removeClass('full-img');
                }
            });
        }*/

        /*casperFullImg();
        $(window).smartresize(casperFullImg);*/


/*
    });*/
/*
}(jQuery));*/
/*
(function($,sr){
  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          }

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  };
  // smartresize
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');*/
