var http = require('http');
var port = Number(process.argv[2]);
var map = require('through2-map');

var server = http.createServer(function(req, resp) {
  if(req.method !== 'POST') {
    return resp.end("I can only accept POST requests\n");
  }
  req.pipe(map(function(chuck) {
    return chuck.toString().toUpperCase();
  })).pipe(resp);
});
server.listen(port);
