var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines.shift());
var H = parseInt(lines.shift());
var A = parseFloat(lines.shift());
console.log('NUMBER =', N);
console.log('SALARY = U$', (H * A).toFixed(2));