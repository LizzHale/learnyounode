var http = require('http');
var url = require('url');
var fs = require('fs');

// Port number is supplied as the first commandline argument
var port = process.argv[2];

function parsetime(time) {
    return {
        "hour": time.getHours(),
        "minute": time.getMinutes(),
        "second": time.getSeconds()
    }
}

function unixtime(time) {
    return {
        "unixtime": time.getTime()
    }
}

// two routes:
// One route /api/parsetime  with query string ?iso=<iso-format time>
// Send a json response containing hour minute and second
// Second route /api/unixtime with query string ?iso=<iso-format time>
// Send a json response containing unix epoch time
var server = http.createServer(function(request, response) {
    var urlParsed = url.parse(request.url, true);
    var time = new Date(urlParsed.query.iso);

    if (urlParsed.pathname === '/api/parsetime') {
        result = parsetime(time);
    }
    else if (urlParsed.pathname === '/api/unixtime') {
        result = unixtime(time);
    }

    if (result) {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(result));
    }
    else {
        response.writeHead(404);
        response.end();
    }
});

server.listen(port);