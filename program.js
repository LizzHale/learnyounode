// Use the net module to create a raw TCP server
var net = require('net');

// Port number is supplied as the first commandline argument
var port = process.argv[2];

// Create a function to zero-fill the month, day, hour, and minute
function zeroFill(i) {
    return (i < 10 ? '0' : '') + i
}

// Format the current date and time to use in the socket duplex stream
function time() {
    var date = new Date();
    return date.getFullYear() + '-'
        + zeroFill(date.getMonth() + 1) + '-'
        + zeroFill(date.getDate()) + ' '
        + zeroFill(date.getHours()) + ':'
        + zeroFill(date.getMinutes());
}

// Interesting: the callback function used in createServer is called more than once.
// Every connection received by your server triggers another call to the callback
var server = net.createServer(function(socket) {
    // The socket object contains a lot of met-data regarding the connection
    // but! it's also a duplex stream.
    socket.end(time() + '\n', 'utf8');
});

server.listen(port);