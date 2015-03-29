var fs = require('fs');
var path = require('path');

module.exports = function filefilter(dir, ext, callback) {
    fs.readdir(dir, function (error, filenames) {
        if (error) 
            return callback(error)

        list = filenames.filter(function (filenames) {
            return path.extname(filenames) === '.' + ext;
        })
        callback(null, list);
    });
};