$(function($) {

  //This opens the contact form modal
  	$(".contact-button").on("click", function(){
  		$(".contact-us-container").fadeIn();
  	});

  	$(".contact-us-shadow").on("click", function(){
  		$(".contact-us-container").fadeOut();
  	});

  	$(".close-btn").on("click", function(){
  		$(".contact-us-container").fadeOut();
  	});

    $(".menu-icon").on("click", function(){
  		$(".navigation-container").fadeToggle();
      $(".menu-icon").toggleClass("close-mode");

  	});


  // This manages the navigation bar so it becomes prominent on scroll
  $(window).bind('scroll', function() {
  var navHeight = 1;
    if ($(window).scrollTop() > navHeight) {
      $('.site-navigation').addClass('site-navigation-fixed');
    }
    else {
      $('.site-navigation').removeClass('site-navigation-fixed');
    }
  });

  // This will make an autoscroll to the bottom of the page (CTA)
  $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});




});
