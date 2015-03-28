var fs = require('fs');
var path = require('path');

var callback = function(err, list) {
    if (err) return console.log("Error");
    for (i = 0; i < list.length; i++) {
        if (path.extname(list[i]) == "." + process.argv[3]) {
            console.log(list[i]);
        };
    };
};

fs.readdir(process.argv[2], callback);

