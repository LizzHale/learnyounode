var fs = require('fs');
var file = fs.readFileSync(process.argv[2]).toString();
var fileArr = file.split('\n');
console.log(fileArr.length - 1);
