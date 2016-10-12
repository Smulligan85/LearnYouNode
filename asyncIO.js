var fs = require('fs');

var fileName = process.argv[2];

function readLines() {
  fs.readFile(fileName, function lines(err, fileContents) {
    if(err) {
      return console.log(err);
    }
    console.log(fileContents.toString().split('\n').length - 1);
  });
}

readLines();
