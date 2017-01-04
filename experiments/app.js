(function () {
    'use strict';

    function nullFn(x, y, w, h, c) {
        return x * y * c; //(x  | y) * c % 10000;
    }

    function init() {
        var canvas = document.getElementById('draw'),
            input = document.getElementById('input'),
            c = 0,
            ctx = canvas.getContext('2d'),
            w = canvas.width,
            h = canvas.height,
            imageData = ctx.createImageData(w, h),
            fn = nullFn;

        console.log('init', canvas, input, ctx, w, h, imageData, fn);
        function updateCode(code) {
            try {
                fn = new Function('x', 'y', 'w', 'h', 'c', 'return ' + code + ';');
                console.log('new fn', fn);
            } catch (err) {
                console.error('bad code', err);
            }
        }

        input.addEventListener('keyup', function (event) {
            updateCode(event.target.value);
        });

        function updateFrame(w, h, c, fn, ctx, imageData) {
            var x, y, p, color, r, g, b, a,
                image = imageData.data;

            for (x = 0; x < w; x += 1) {
                for (y = 0; y < h; y += 1) {
                    p = (x + y * w) * 4;
                    color = fn(x, y, w, h, c);
                    r = color & 0x000000ff;
                    g = (color & 0x0000ff00) >> 8;
                    b = (color & 0x00ff0000) >> 16;
                    a = 0xff;
                    image[p + 0] = r;
                    image[p + 1] = g;
                    image[p + 2] = b;
                    image[p + 3] = a;
                }
            }

            ctx.putImageData(imageData, 0, 0);
        }

        function onAnimationFrame() {
            c += 1;
            try {
                updateFrame(w, h, c, fn, ctx, imageData);
            } catch (err) {
            }
            window.requestAnimationFrame(onAnimationFrame);
        }

        onAnimationFrame();
    }

    window.addEventListener('load', init);
}());
