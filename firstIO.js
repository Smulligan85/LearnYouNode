var fs = require('fs');

var fileName = process.argv[2];

var buffStr = fs.readFileSync(fileName).toString();
var lines = buffStr.split('\n').length - 1;

console.log(lines);
