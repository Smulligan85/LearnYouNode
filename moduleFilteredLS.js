var mymodule = require('./filteredLS2.js');
var dirName = process.argv[2];
var extFilter = process.argv[3];
mymodule(dirName, extFilter, function(err, list) {
  if (err) {
    return console.log("An error occurred", err);
  }

  list.forEach(function(file) {
    console.log(file);
  });
});
