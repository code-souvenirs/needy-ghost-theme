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


*******************************************************************************/

/* 01. Init - Document ready - jQuery
*******************************************************************************/
jQuery(window).ready(function () {

	NeedyGhost();

});

/* 02. Needy-Ghost main function call
*******************************************************************************/
function NeedyGhost() {

	ApplyCollapsableNavigation();
	ApplyLoader();
	ApplyBackToTop();
	ApplySidebarPinning();
	Materialize.fadeInImage('.content-wrapper');
	Materialize.fadeInImage('.sidebar');

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

/* 06. Apply Back-to-top link on scroll
*******************************************************************************/
function ApplySidebarPinning() {

    if ($('header').length) {
      $('.sidebar').pushpin({ top: $('header').height() });
    }
    else {
      $('.sidebar').pushpin({ top: 0 });
    }

}
