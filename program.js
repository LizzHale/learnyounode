var fs = require('fs');

var callback = function(err, data) {
    if (err) return console.log("Error");
    var fileNum = data.split('\n').length -1;
    console.log(fileNum);
};

fs.readFile(process.argv[2], 'utf8', callback);

