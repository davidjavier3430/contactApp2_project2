var prompt = require('prompt-sync')();
var contactPosition = require('./contactPosition');
var writeCsv = require('./writeCsv');
var colors = require('colors');

function deleteContact(data) {

  var contactEmail = String(prompt("Enter a email of the contact you want to Delete: "));

  var positionContact = contactPosition(data, contactEmail);

  if (positionContact === null) {
    console.log('Contact not found'.red);
  } else {
    data.splice(positionContact);

    writeCsv(data);

    console.log('Delete Contact was successful'.green);
  }
}

module.exports = deleteContact;
