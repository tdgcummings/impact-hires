ig.module(
	'plugins.hires' 
)
.requires(
	'impact.image',
	'impact.font'
)
.defines(function(){ "use strict";

ig.Image.inject({	
	load: function(loadCallback) {
		this.parent(loadCallback);
		
		var scale = ig.hiResScale;
		if( this.data && scale !== 1) {
			this.data.src = ig.prefix + this.path.replace(/(\.[^\.]*)?$/, '_' + scale + 'x' + '$1') + ig.nocache;
		}
	},

	resize: function resize(scale) {
		this.width = this.data.width / scale;
		this.height = this.data.height / scale;
	}
});

ig.Font.inject({
	_loadMetrics: function(image) {
		this.parent(image);
		
		var scale = ig.system.scale;
		if (scale !== 1) {
			for (var i = 0; i < this.widthMap.length; i++) {
				this.widthMap[i] /= scale; 
			}
			for (var j = 0; j < this.indices.length; j++) {
				this.indices[j] /= scale; 
			}
		}
	},
	
	_drawChar: function( c, targetX, targetY ) {
		if( !this.loaded || c < 0 || c >= this.indices.length ) { return 0; }
		
		var scale = ig.system.scale;
		
		
		var charX = this.indices[c] * scale;
		var charY = 0;
		var charWidth = this.widthMap[c] * scale;
		var charHeight = (this.height * scale) - 2;		
		
		ig.system.context.drawImage( 
			this.data,
			charX, charY,
			charWidth, charHeight,
			ig.system.getDrawPos(targetX), ig.system.getDrawPos(targetY),
			charWidth, charHeight
		);
		
		return this.widthMap[c] + this.letterSpacing;
	},
});

ig.hiResScale = 1;

});