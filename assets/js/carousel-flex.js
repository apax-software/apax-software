
$(document).ready(function () {
	var companies = {
		mobile_serve: [
			"Mobile Serve",
			4
		],
		pc_usa: [
			"PC USA",
			3
		]
	};
	$('.box-small').on('click',function(){

		var company = ($(this).attr("id"));
		var shortname = companies[company][0];
		var images = companies[company][1];

		$('#company-header').hide().text(shortname).fadeIn(900);

		$( '.item' ).each(function(index, element) {
			var newSrc = '/assets/img/carousel/' + company + index + '.jpg';
			$(element).find('img').fadeOut(200, function() {
				$(element).find('img').attr('src', newSrc);
			}).fadeIn(500);
			// $(element).find("img").attr('src', newSrc);
		});

	});

});