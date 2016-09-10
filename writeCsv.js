var csv = require('csv');
var fs = require('fs');

function writeCsv(data) {
  csv.transform(data, function(row) {
  return row;
}, function(error, data) {
    csv.stringify(data, { header: true }, function(error, data) {
        if (error) throw error;
      fs.writeFile('example.csv', data, function(error) {
        if (error) throw error;        
      });
    });
  });
}

module.exports = writeCsv;
