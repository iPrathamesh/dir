var mkdirp = require('mkdirp');
var fs = require('fs');
var mkdir = function (req, res) {
  var path = 'path/abcd/dada/kaka/mama/gogo/lolo';
  fs.stat(path, function (err, stat) {
    console.log(err, stat);
    if (err) {
        mkdirp(path, function (err) {
        if (err) console.log(err);
        res.status(200).send("dir created: " + path);
      });
      
    } else {
      res.status(200).send("dir already exists");
    }
  });
};
exports.mkdir = mkdir;
