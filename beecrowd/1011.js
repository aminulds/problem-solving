var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var R = parseFloat(lines.shift());
console.log('VOLUME =', ((4/3.0) * 3.14159 * R**3).toFixed(3));
