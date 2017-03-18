/*globals console, document, window, CodeMirror*/
(function () {
    'use strict';
    var preamble = 'var c = $ctx$.c, w = $ctx$.w, h = $ctx$.h, ctx = $ctx$.ctx, $l = $ctx$.lib, clear = $l.clear, random = $l.random, pick = $l.pick, square = $l.square, circle = $l.circle, randomColor = $l.randomColor, text = $l.text, line = $l.line;',
        reportErrorD;

    function nullFn() {
    }

    function reportError(error) {
        console.error(error);
    }

    function random(from, to) {
        from = (!from && from !== 0) ? 0 : from;
        to = to || 100;
        return Math.floor((Math.random() * (to - from)) + from);
    }

    function randomColor(noAlpha) {
        var r = random(0, 255),
            g = random(0, 255),
            b = random(0, 255),
            a = noAlpha ? 1 : Math.random();

        return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
    }

    function pick(items) {
        return items[Math.floor(Math.random() * items.length)];
    }

    function init() {
        var canvas = document.getElementById('draw'),
            code = document.getElementById('code'),
            runBtn = document.getElementById('update-btn'),
            drawSpeed = document.getElementById('draw-speed'),
            skipFrames = 0,
            frameCount = 0,
            lib, fnCtx, ctx, w, h,
            fn = nullFn;

        // if set with style or css it dispays blury lines
        canvas.width = (window.innerWidth / 2.1);
        canvas.height = (window.innerHeight / 0.9);
        ctx = canvas.getContext('2d');
        w = canvas.width;
        h = canvas.height;

        function square(opts) {
            opts = opts || {};
            var x0 = opts.x0 || opts.x || 10,
                y0 = opts.y0 || opts.y || 10,
                width, height, hasBorder;

            if (opts.x1 !== undefined) {
                width = opts.x1 - x0;
            } else {
                width = opts.width || 100;
            }

            if (opts.y1 !== undefined) {
                height = opts.y1 - y0;
            } else {
                height = opts.height || 100;
            }

            hasBorder = opts.borderWidth || opts.borderColor;

            if (opts.color || !hasBorder) {
                ctx.fillStyle = opts.color || '#999';
                ctx.fillRect(x0, y0, width, height);
            }

            if (opts.borderWidth) {
                ctx.strokeStyle = opts.borderColor || '#333';
                ctx.lineWidth = opts.borderWidth;
                ctx.strokeRect(x0, y0, width, height);
            }
        }

	    function line(opts) {
            opts = opts || {};
            var x0 = opts.x0 || opts.x || 10,
                y0 = opts.y0 || opts.y || 10,
                x1, y1, hasBorder;

            if (opts.x1 !== undefined) {
                x1 = opts.x1;
            } else {
                x1 = x0 + (opts.width || 100);
            }

            if (opts.y1 !== undefined) {
                y1 = opts.y1;
            } else {
                y1 = y0 + (opts.height || 100);
            }

            hasBorder = opts.borderWidth || opts.borderColor;

            ctx.beginPath();
            ctx.moveTo(x0, y0);
            ctx.lineTo(x1, y1);

            if (opts.color || !hasBorder) {
                ctx.fillStyle = opts.color || '#999';
                ctx.fill();
            }

            if (opts.borderWidth) {
                ctx.strokeStyle = opts.borderColor || '#333';
                ctx.lineWidth = opts.borderWidth || 10;
                ctx.stroke();
            }
        }    

        function text(opts) {
            opts = opts || {};
            var fontSize = opts.fontSize || '16pt',
                fontFamily = opts.fontFamily || 'serif',
                text = opts.text || 'Hello World!',
                x = opts.x0 || opts.x || 10,
                y = opts.y0 || opts.y || 10,
                hasBorder;

            if (typeof fontSize === 'number') {
                fontSize = '' + fontSize + 'px';
            }

            ctx.font = fontSize + ' ' + fontFamily;

            hasBorder = opts.borderWidth || opts.borderColor;

            if (opts.color || !hasBorder) {
                ctx.fillStyle = opts.color || '#999';
                ctx.fillText(text, x, y);
            }

            if (opts.borderWidth) {
                ctx.strokeStyle = opts.borderColor || '#333';
                ctx.lineWidth = opts.borderWidth;
                ctx.strokeText(text, x, y);
            }
        }

        function clear() {
            ctx.clearRect(0, 0, w, h);
        }

        function circle(opts) {
            opts = opts || {};
            var x = opts.x0 || opts.x || 50,
                y = opts.y0 || opts.y || 50,
                radius = opts.radius,
                hasBorder;
               
            if (!radius) {
                if (opts.width) {
                    radius = opts.width / 2;
                } else {
                    radius = 25;
                }
            }

            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2, false);

            hasBorder = opts.borderWidth || opts.borderColor;
            if (opts.color || !hasBorder) {
                ctx.fillStyle = opts.color || '#999';
                ctx.fill();
            }

            if (hasBorder) {
                ctx.strokeStyle = opts.borderColor || '#333';
                ctx.lineWidth = opts.borderWidth || 1;
                ctx.stroke();
            }
        }

        lib = {clear: clear, square: square, circle: circle, random: random,
            pick: pick, randomColor: randomColor, text: text, line: line};
        fnCtx = {w: w, h: h, ctx: ctx, c: 0, lib: lib};

        console.log('init', canvas, code, ctx, w, h, fn);
        function updateCode(code) {
            var fullCode = preamble + code;
            try {
                fn = new Function('$ctx$', fullCode);
                console.log('new fn', fn);
            } catch (err) {
                console.error('bad code', err, fullCode);
            }
        }

        function onAnimationFrame() {
            frameCount += 1;
            if (frameCount >= skipFrames) {
                frameCount = 0;
            } else {
                window.requestAnimationFrame(onAnimationFrame);
                return;
            }

            fnCtx.c += 1;
            try {
                fn(fnCtx);
            } catch (err) {
                reportErrorD(err);
            }
            window.requestAnimationFrame(onAnimationFrame);
        }

		var editor = CodeMirror.fromTextArea(code, {
			lineNumbers: true,
			mode: "application/javascript",
			matchBrackets: true
		});

        editor.setSize('47%', '100%');
        editor.getWrapperElement().style.float = 'left';
        window.editor = editor;

        function onRunClick() {
            var newSkipFrames = parseInt(drawSpeed.value, 10);

            if (newSkipFrames === newSkipFrames) {
                skipFrames = newSkipFrames;
            }

            updateCode(editor.getValue());
        }

        runBtn.addEventListener('click', onRunClick);

        onRunClick();
        onAnimationFrame();
    }

    function debounce(func, wait, immediate) {
        var timeout, args, context, timestamp, result;

        var later = function() {
            var last = Date.now() - timestamp;

            if (last < wait && last >= 0) {
                timeout = window.setTimeout(later, wait - last);
            } else {
                timeout = null;
                if (!immediate) {
                    result = func.apply(context, args);

                    if (!timeout) {
                        context = args = null;
                    }
                }
            }
        };

        return function() {
            context = this;
            args = arguments;
            timestamp = Date.now();
            var callNow = immediate && !timeout;

            if (!timeout) {
                timeout = window.setTimeout(later, wait);
            }

            if (callNow) {
                result = func.apply(context, args);
                context = args = null;
            }

            return result;
        };
    }

    reportErrorD = debounce(reportError, 2000);

    window.addEventListener('load', init);
}());
