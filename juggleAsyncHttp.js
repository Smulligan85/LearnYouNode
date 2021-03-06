var http = require('http');
var bl = require('bl');

var results = [];
var count = 0;

function printResults() {
  results.forEach(function(dataString) {
    console.log(dataString);
  });
}

function getUrlString(idx) {
http.get(process.argv[2+idx], function(response) {
  response.pipe(bl(function (err, data) {
    if (err) { return console.log(err); }

    results[idx] = data.toString();
    count++;

    if (count === 3) {
      printResults();
    }
  }));
});

}

for (var i = 0; i < 3; i++) {
  getUrlString(i);
}
