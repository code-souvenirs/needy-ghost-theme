/*******************************************************************************
	@Author			Jaspalsinh Chauhan (Jsinh)
	@Website		http://www.jsinh.in
	@Last Update	12:10 AM Tuesday, May 12, 2015

	TABLE CONTENTS
	-------------------------------
    01. Init - Document ready - jQuery
		02. Needy-Ghost main function call
		03. Apply collapsable navigation menu
		04. Apply pre-loader animation
		05. Apply Back-to-top link on scroll
		06. Apply sidebar pinning
		07. Apply materialze animation
		08. Apply post content transformation


*******************************************************************************/

/* 01. Init - Window & Document ready - jQuery
*******************************************************************************/

jQuery(window).ready(function () {

	NeedyGhost();

});

/* 02. Needy-Ghost main function call
*******************************************************************************/
function NeedyGhost() {

	$('.parallax').parallax();
	ApplyCollapsableNavigation();
	ApplyLoader();
	ApplyBackToTop();
	ApplyMaterializeAnimation();
	ApplyPostContentTransformation();

}

/* 03. Apply collapsable navigation menu
*******************************************************************************/
function ApplyCollapsableNavigation() {

	$(".button-collapse").sideNav();

}

/* 04. Apply pre-loader animation
*******************************************************************************/
function ApplyLoader() {

	/* # Show loader untill everything's loaded. */
	$('.loader').addClass('active');

	$(window).load(function() {
			/* # All loaded, hide loader. */
			$('.loader').removeClass('active');
		});

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

function ApplyMaterializeAnimation() {

	Materialize.fadeInImage('.content-wrapper');
	Materialize.fadeInImage('.sidebar');

}

function ApplyPostContentTransformation() {

	$(".post-content").fitVids();

	$( ".post-content img" ).wrap(function() {
		return "<a class='fancybox-images' href='" + $(this).attr("src") + "' data-fancybox-group='defaultgallery' title='" + $(this).attr("alt") + "'>"  + $(this).text() + "</a>";
	});

	$('.fancybox-images').fancybox();

  /* Make specific links open in a new window in a HTML5 valid way */
  $('a[rel*="external"]').click(function(){
    $(this).attr('target', '_blank');
  });

  function fulImageResize() {
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

	fulImageResize();
  $(window).smartresize(fulImageResize);

	/** Fitvids [Youtube|Vimeo] **/
	if(jQuery(".fullwidthbanner iframe").length < 1 && jQuery(".fullscreenbanner iframe").length < 1 && jQuery(".fullscreenvideo").length < 1) { // disable fitvids if revolution slider video is present!
		jQuery("body").fitVids();
	}

}

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
