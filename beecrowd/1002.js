
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var R = parseFloat(lines.shift());
console.log('A=' + (3.14159*R**2).toFixed(4));