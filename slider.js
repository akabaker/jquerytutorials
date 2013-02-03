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
