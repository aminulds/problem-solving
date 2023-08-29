var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var name = lines.shift();
var salary = parseFloat(lines.shift());
var bonus = parseFloat(lines.shift());
console.log('TOTAL = R$', (salary + bonus * 0.15).toFixed(2));