
$(document).ready(function () {
	

	$('.box-small').on('click',function(e){

		// $('.hide').removeClass('hide').fadeOut(200);
		// ($(this).addClass('hide')).fadeIn(900);

		var shortname_string = ($(this).attr('id'));
		$.getJSON("../assets/js/portfolio.json", function(json) {
			
			var company = json[shortname_string];

			$( '.item' ).each(function(index, element) {
				var newSrc = '/assets/img/carousel/' + shortname_string + index + '.jpg';
				$(element).find('img').fadeOut(200, function() {
					$(element).find('img').attr('src', newSrc);
				}).fadeIn(500);
			});

			$('#company-header').hide().text(company.title).fadeIn(900);
		});
	});
});