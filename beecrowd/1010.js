var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var rowSpace1 = lines.shift().split(' ');
var code1 = parseInt(rowSpace1.shift());
var unit1 = parseInt(rowSpace1.shift());
var price1 = parseFloat(rowSpace1.shift());

var rowSpace2 = lines.shift().split(' ');
var code2 = parseInt(rowSpace2.shift());
var unit2 = parseInt(rowSpace2.shift());
var price2 = parseFloat(rowSpace2.shift());

var total = (unit1 * price1) + (unit2 * price2);
console.log('VALOR A PAGAR: R$', total.toFixed(2));