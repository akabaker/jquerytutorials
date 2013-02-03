function Slider(container, nav) {
	this.container = container;
	this.nav = nav.show();
	this.imgs = this.container.find('img');
	this.imgWidth = this.imgs[0].width;
	this.imgsLen = this.imgs.length;
	this.current = 0;
	this.events.click.call(this);
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

Slider.prototype.events = {
	click: function() {
		var self = this;

		self.nav.find('button').on('click', function() {
			var current =self.setCurrent( $(this).data('dir') );
			self.transition();
		});
	}
}
