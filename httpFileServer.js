var fs = require('fs');
var http = require('http');
var port = Number(process.argv[2]);
var fileLoc = process.argv[3];

var server = http.createServer(function(req, resp) {
  resp.writeHead(200, {'content-type': 'text/plain'});
  var fsFile = fs.createReadStream(fileLoc);
  fsFile.pipe(resp);
});

server.listen(port);


