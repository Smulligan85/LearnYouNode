var fs = require('fs');
var path = require('path');


module.exports = function filterDirContents(dirName, extName, callback) {
  fs.readdir(dirName, function(err, list) {
    if (err) {
      return callback(err);
    }

    var filtered = [];

    for(var i = 0; i < list.length; i++) {
      if (path.extname(list[i]) == "." + extName) {
        filtered.push(list[i]);
      }
    }

    callback(null, filtered);
  });
};

