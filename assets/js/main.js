/*******************************************************************************
	@Author			Jaspalsinh Chauhan (Jsinh)
	@Website		http://www.jsinh.in
	@Last Update	12:10 AM Wednesday, March 25, 2015

	TABLE CONTENTS
	-------------------------------
    01. Variables
		02. Globals
		03. Code blocks
    04. Hyperlink common styles
		05. Back to top
    06. Loader
    07. Pagination
    08. Header
    09. Main content
    10. Sidebar
    11. Disclaimer
    12. Footer
    13. Imports

*******************************************************************************/

/* Init */
jQuery(window).ready(function () {
	NeedyGhost();
});

function NeedyGhost() {

  /* Apply FIT-VIDS responsiveness */
  $(".post-content").fitVids();
}

(function ($) {
    "use strict";

    $(document).ready(function(){

        $(".post-content").fitVids();

        /* Make specific links open in a new window in a HTML5 valid way */
        $('a[rel*="external"]').click(function(){
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
        }

        casperFullImg();
        $(window).smartresize(casperFullImg);

        /* # Show loader untill everything's loaded. */
        $('.loader').show();

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
    });

    $(window).load(function(){

      /* # All loaded, hide loader. */
      $('.loader').hide();
    });

}(jQuery));

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

})(jQuery,'smartresize');
