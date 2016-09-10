var clear = require('clear');

var readCsv = require('./readCsv');
var searchContact = require('./search');
var contactCount = require('./count');
var addContact = require('./add');
var updateContact = require('./update');
var deleteContact = require('./delete');

var argvSelect = process.argv[2];

switch (argvSelect.toLowerCase()) {
  case 'search':
    clear();
    callback = searchContact;
    break;

  case 'count':
    clear();
    callback = contactCount;
    break;

  case 'add':
    clear();
    callback = addContact;
    break;

  case 'update':
    clear();
    callback = updateContact;
    break;

  case 'delete':
    clear();
    callback = deleteContact;
    break;

  case 'help':
    clear();
    console.log('Commands List: (Add, Delete, Search, Update, Count, Help)');
    break;

  default:
    clear();
    console.log('Enter a valid command: (Add, Delete, Search, Update, Count, Help)');
    break;
}

readCsv('example.csv', callback);
