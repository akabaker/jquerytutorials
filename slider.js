<<<<<<< HEAD
function Slider(container, nav) {
	this.container = container;
	this.nav = nav.show();
	this.imgs = this.container.find('img');
	this.imgWidth = this.imgs[0].width;
	this.imgsLen = this.imgs.length;
	this.current = 0;
}

Slider.prototype.transition = function(coords) {
	this.container.animate({
		// coords or set margin to neg val
		// 2 * 600 = 1200, etc
		'margin-left': coords || -(this.current * this.imgWidth)
	});
};

Slider.prototype.setCurrent = function(dir) {	
	var pos = this.current;

	// ~~ converts to number
	// cast true or false to integer
	// add or subtract one based on results of a text
	pos += ( ~~(dir === 'next') || -1 );

	// modulus: (this remainder)
	// 2 % 4 = 2, 3 % 4 = 3, 4 % 4 = 0
	this.current = ( pos < 0 ) ? this.imgsLen - 1 : pos % this.imgsLen;

	return pos;
};
=======
(function($) {
	var sliderUL = $('div.slider').css('overflow', 'hidden').children('ul'),
		imgs = sliderUL.find('img'),
		imgWidth = imgs[0].width, // returns 600, first img node
		imgsLen = imgs.length, // 4
		current = 1,
		totalImgsWidth = imgsLen * imgWidth;

	$('#slider-nav').show().find('button').on('click', function() {
		var direction = $(this).data('dir'),
			loc = imgWidth; // 600
		
		// update current value
		//( test ) ? true: false;
		(direction === 'next') ? ++current : --current;

		// if first image
		if (current === 0) {
			// redirect to last image in the set, we don't have image 0
			current = imgsLen;
			loc = totalImgsWidth - imgWidth; // 2400 - 600 = 1800
			direction = 'next';
			// if the current -1, then user on the last image in the set, sent to first
		} else if (current -1 === imgsLen) { // Are we at the end? Should we reset?
			current = 1;
			loc = 0;
		}

		transition(sliderUL, loc, direction);
	});

	function transition(container, loc, direction) {
		var unit; // -= or +=

		if (direction && loc !== 0) {
			unit = (direction === 'next') ? '-=' : '+=';
		}

		container.animate({
			'margin-left': unit ? (unit + loc) : loc
		});
	}
})(jQuery);
>>>>>>> 416f9887ab095c024e03183eb7ace4d9661894ed
