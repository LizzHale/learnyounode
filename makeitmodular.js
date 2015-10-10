var path = process.argv[2];
var extension = process.argv[3];

var readAndFilter = require('./file.js');


readAndFilter(path, extension, function(error, list) {
    if (error) {
        return console.log('There was an error:', error);
    }

    list.forEach(function(file) {
        console.log(file);
    });

});