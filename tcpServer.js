var net = require('net');
var strftime = require('strftime');
var port = Number(process.argv[2]);

var server = net.createServer(function(socket) {
  socket.end(createDate());
});

server.listen(port);

function createDate() {
  return strftime('%Y-%m-%e %H:%M') + "\n";
}
