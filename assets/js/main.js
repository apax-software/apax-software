// $(document).ready(function () {
//   $(".navbar-nav li a").click(function(event) {
//     $(".navbar-collapse").collapse('hide');
//   });
// });

$(window).on("load", function() {
	$ ( 'html' ).removeClass( "loading" );
})


$(document).ready(function() {

	//make bg image full size
	if(! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$("#headerwrap").css("height", getWindowHeight()) - 50; //for navbar
		$("#headerwrap").css("width", getWindowWidth());
		$(window).resize(function() {
			$("#headerwrap").css("height", getWindowHeight())- 50; 
			$("#headerwrap").css("width", getWindowWidth());
		});
	}

	if(document.body.clientWidth >= 870) {
		$('#bg-video').attr('autoplay', true);
	}

	
});

var getWindowHeight = function() {
	var winHeight = $(window).height();
	return winHeight;
}

var getWindowWidth = function() {
	var winWidth = $(window).width();
	return winWidth;
}



$('#myCarousel').carousel({
  interval: 10000
});

$('.carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  if (next.next().length>0) {
 
      next.next().children(':first-child').clone().appendTo($(this)).addClass('rightest');
      
  }
  else {
      $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
     
  }

 


});