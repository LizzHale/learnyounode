var http = require('http');

var url = process.argv[2];

http.get(url, function callback (response) {
    var finished = ""; // still waiting
    response.setEncoding('utf8');
    response.on("data", function (data) {
        finished = finished + data;
    }).on("error", function (error) {
        console.log(error);
    }).on("end", function (end) {
        console.log(finished.length);
        console.log(finished);
    });
});
