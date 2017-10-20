# ImpactJS HiRes Plugin

ImpactJS plugin to load HiDPI media assets for devices with a Device Pixel Ratio of more than 1.


## Quick Start

1.  Set the variable ig.hiResScale before running the ig.main function
2.  Use the ig.hiResScale variable as the scale argument in the ig.main function
3.  When ig.hiResScale is set to an integer other than 1, Impact will load image's and fonts with the correctly appended filename.
    (e.g. If the scale is set to 2 it will load filenames appended with '_2x', e.g. 'filename_2x.png')
  
When using ImpactJS sprite fonts, re-generate using the font tool at the required size. So if the original font was 14px, regenerate at 28px for a scale of 2 and append the filename as above.


## Example Usage

 ```javascript
var canvas = document.getElementById('canvas');
canvas.style.width = window.innerWidth + 'px';
canvas.style.height = window.innerHeight + 'px';

var width = window.innerWidth;
var height = window.innerHeight;
ig.hiResScale = window.devicePixelRatio || 1;

ig.main( '#canvas', MyGame, 60, width, height, ig.hiResScale );
```

