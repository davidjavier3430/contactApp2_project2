var csv = require('csv');
var fs = require('fs');

function readCsv(filename, callback) {
  fs.readFile(filename, function(error, data) {
    if (error) throw error;
    csv.parse(data, { columns: true }, function(err, dataParsed) {
      if (error) throw error;
      callback(dataParsed);
    });
  });
}

module.exports = readCsv;
