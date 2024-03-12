var canvas = document.querySelector('canvas');
var gl = canvas.getContext('webgl');

gl.clearColor(Math.random(0.0, 1.0), Math.random(0.0, 1.0), Math.random(0.0, 1.0), 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);

