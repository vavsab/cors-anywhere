var server = require('net').createServer(function(socket) {
    socket.setEncoding('utf-8');
    socket.on('data', function(data) {
      if (data.indexOf('\r\n') >= 0) {
        // Assume end of headers.
        socket.write('HTTP/1.0 0\r\n');

        socket.write('Content-Length: 25\r\n');
        socket.end('\r\n');
      }
    })
});

console.log(server.listen(0).address().port)