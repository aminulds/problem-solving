var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines.shift()).toFixed(1);
var B = parseFloat(lines.shift()).toFixed(1);

console.log('MEDIA =', ((A*35 + B*75) / 110).toFixed(5));