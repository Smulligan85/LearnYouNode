var http = require('http');
var url = require('url');

var port = process.argv[2];

var server = http.createServer(function(req, resp) {
  var parsedUrl = url.parse(req.url, true);
  var queryDate = new Date(parsedUrl.query.iso);
  var result;

  function parseTime(time) {
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    var parseJsonResponse = {
      "hour": hour,
      "minute": minute,
      "second": second
    };
    return parseJsonResponse;
  }

  function parseUNIXTime(time) {
    var timeSinceEpoch = time.getTime();
    var jsonUnixResponse = {
      "unixtime": timeSinceEpoch
    };
    return jsonUnixResponse;
  }

  if (parsedUrl.pathname == '/api/parsetime') {
    result = parseTime(queryDate);

  } else if (parsedUrl.pathname == '/api/unixtime') {
    result = parseUNIXTime(queryDate);
  }

  if (result) {
    result = JSON.stringify(result);
    resp.writeHead(200, { 'Content-Type': 'application/json' });
    resp.end(result);
  } else {
    resp.writeHead(404);
    resp.end("That endpoint doesn't exist");
  }

});

server.listen(port);
