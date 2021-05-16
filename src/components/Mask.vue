		<script type="text/javascript">
			var imagePaths = [
				"images/j0149014.jpg", "images/j0149024.jpg", "images/j0149029.jpg", "images/j0178677.jpg"
			];
			var showCanvas = null;
			var showCanvasCtx = null;
			var img = document.createElement("img");
			var currentImage = 0;
			var revealTimer;
			var gAlpha = 0.1;
			var now = null;
			var FADE_DELAY = 50; // ms to delay for each alpha increment
			var IMAGE_DELAY = 3000; // ms to show each image for

			function init() {
				// get a reference to the canvas and drawing context
				showCanvas = document.getElementById('showCanvas');
				showCanvasCtx = showCanvas.getContext('2d');

				// set the width and height of the img element to match image dimensions
				img.setAttribute('width', '600');
				img.setAttribute('height', '400');

				// show the initial image
				switchImage();

				// start the animation
				setInterval(switchImage, IMAGE_DELAY);
			}

			function switchImage() {
				// get the next image in the array
				img.setAttribute('src', imagePaths[currentImage++]);
				if (currentImage >= imagePaths.length) {
					currentImage = 0;
				}

				// reset the global alpha and slowly ramp it up
				gAlpha = 0.0;
				requestAnimationFrame(revealImage);
			}

			function revealImage(timestamp) {
				if (!now) {
					now = timestamp;
				}

				if ((timestamp - now) > FADE_DELAY) {
					gAlpha += 0.01;
					showCanvasCtx.globalAlpha = gAlpha;
					showCanvasCtx.drawImage(img, 0, 0, 600, 400);
					now = timestamp;
				}
				if (gAlpha < 1.0) {
					requestAnimationFrame(revealImage);
				}
			}
		</script>
	</head>

	<body onload='init()'>
		<h1>Creating a Smooth Slideshow with Canvas</h1>
		<p>This example uses a canvas element and animation to achieve a smooth image reveal effect</p>
		<div id='content'>
			<canvas id='showCanvas' width='600' height='400'>
				Canvas Not Supported
			</canvas>
		</div>
	</body>

</html>

var size = blocks.value / 100,
    w = canvas.width * size,
    h = canvas.height * size;

// draw the original image at a fraction of the final size
ctx.drawImage(img, 0, 0, w, h);

// turn off image aliasing
ctx.msImageSmoothingEnabled = false;
ctx.mozImageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;

// enlarge the minimized image to full size    
ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);

<canvas id="canvasId" height="100" width="400"></canvas>

visualize() {
            var canvas = document.querySelector('#canvasId');

            if (canvas !== null) {
                var canvasCtx = canvas.getContext("2d");

                canvas.setAttribute('width', "500px");

                var drawVisual;

                var WIDTH = canvas.width;
                var HEIGHT = canvas.height;


                // var visualSetting = visualSelect.value;
                // console.log(visualSetting);

                this.analyser.fftSize = 2048;
                var bufferLength = this.analyser.fftSize;
                console.log(bufferLength);
                var dataArray = new Uint8Array(bufferLength);

                canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

                var self = this;

                var draw = function () {

                    drawVisual = requestAnimationFrame(draw);

                    self.analyser.getByteTimeDomainData(dataArray);

                    canvasCtx.fillStyle = 'rgb(200, 200, 200)';
                    canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

                    canvasCtx.lineWidth = 4;
                    canvasCtx.strokeStyle = 'rgb(0, 0, 0)';

                    canvasCtx.beginPath();

                    var sliceWidth = WIDTH * 1.0 / bufferLength;
                    var x = 0;

                    for (var i = 0; i < bufferLength; i++) {

                        var v = dataArray[i] / 128.0;
                        var y = v * HEIGHT / 2;

                        if (i === 0) {
                            canvasCtx.moveTo(x, y);
                        } else {
                            canvasCtx.lineTo(x, y);
                        }

                        x += sliceWidth;
                    }

                    canvasCtx.lineTo(canvas.width, canvas.height / 2);
                    canvasCtx.stroke();
                };

                draw();
            }
    }