var fs = require('fs');

var callback = function(err, data) {
    if (err) return console.log("Error");
    data = data.toString();
    var fileNum = data.split('\n').length -1;
    console.log(fileNum);
};
fs.readFile(process.argv[2], callback);

