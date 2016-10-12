var fs = require('fs');
var path = require('path');

var dirName = process.argv[2];
var extFilter = "." + process.argv[3];

function filterDirContents() {
  fs.readdir(dirName, function filterDir(err, list) {
    if (err) { return console.log(err); }

    for(var i = 0; i < list.length; i++) {
      if (path.extname(list[i]) == extFilter) {
        console.log(list[i]);
      }
    }
  });
}

filterDirContents();
