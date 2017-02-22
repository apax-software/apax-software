
$(document).ready(function () {
	
	$('.box-small').on('click',function(){
	    var jsonData = $.ajax("../assets/js/portfolio.json", function() {
	    	console.log("Success");
	    });
	    console.log("Here" + jsonData);
	});

});