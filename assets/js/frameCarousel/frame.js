$(document).ready(function () {

	$('.iphone-frame').frameCarousel({
		debug: true, // For dev only

		frame: '../assets/img/carousel/iphone.png',

		frameSize: [{
			// width: 10,
			// width: 250
			width: 107
			// minScreenWidth: 200,
			// maxScreenWidth: 400
		}],

		collapseThreshold: 450,

		boundingBox: {
			left: '15%',
			top: '16.7%',
			width: '66%',
			height: '64.8%'
		},
		images: [
			'../assets/img/carousel/1m.jpg',
			'../assets/img/carousel/2m.jpg',
			'../assets/img/carousel/3m.jpg',
			'../assets/img/carousel/4m.jpeg',
			'../assets/img/carousel/5m.jpg',
			'../assets/img/carousel/6m.jpg',
			'../assets/img/carousel/7m.jpg'
		],

		autoplay: true,

		autoplayInterval: 3500,

		controlsPosition: {
			top: '15%'
		}
	});

	$('.mac-frame').frameCarousel({
		debug: true, // For dev only

		frame: '../assets/img/carousel/mac_screen.png',

		frameSize: [{
			width: 250
		}],

		collapseThreshold: 450,

		boundingBox: {
			left: '4.7%',
			top: '4.2%',
			width: '92.5%',
			height: '62%'
		},
		images: [
			'../assets/img/carousel/1d.png',
			'../assets/img/carousel/2d.png',
			'../assets/img/carousel/3d.png',
			'../assets/img/carousel/4d.png',
			'../assets/img/carousel/5d.png',
			'../assets/img/carousel/6d.png',
			'../assets/img/carousel/7d.png'
		],

		autoplay: true,

		autoplayInterval: 4500,

		controlsPosition: {
			top: '15%'
		}
	});

	// $('.iphone-frame').append('<h2>Mobile Apps');	

	// var frameCarousel = $('.iphone-frame').data('frameCarousel');
 
	// console.log(frameCarousel);

	
	// frameCarousel.next( options );

});