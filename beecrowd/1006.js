var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines.shift()).toFixed(1);
var B = parseFloat(lines.shift()).toFixed(1);
var C = parseFloat(lines.shift()).toFixed(1);
console.log('MEDIA =', ((A*2 + B*3 + C*5) / 10).toFixed(1));