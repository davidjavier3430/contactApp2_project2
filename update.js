var prompt = require('prompt-sync')();
var contactPosition = require('./contactPosition');
var contactExist = require('./contactExist');
var writeCsv = require('./writeCsv');
var colors = require('colors');

function updateContact(data) {
  var contactEmail = String(prompt("Enter a email of the contact you want to Update: "));

  var positionContact = contactPosition(data, contactEmail);

  if (positionContact === null) {
    console.log('Contact not found'.red);
  } else {
    var upfirst_name = String(prompt("New first name: "));
    var uplast_name = String(prompt("New last name: "));
    var upphone = String(prompt("New Phone Number: "));
    var upemail = String(prompt("New Email: "));
    var upcity = String(prompt("New City: "));
    var upzipcode = String(prompt("New Zipcode: "));
    var upwebsite = String(prompt("New Website: "));
    var upcompany = String(prompt("New Company Name: "));

    var existContact = contactExist(data, upemail);
    //console.log(existContact);

    if(existContact) {
      console.log('The email address you entered is already in use on other Contact'.red);
    } else {
      data[positionContact] = {
      first_name: upfirst_name,
      last_name:  uplast_name,
      phone:      upphone,
      email:      upemail,
      city:       upcity,
      zipcode:    upzipcode,
      website:    upwebsite,
      company:    upcompany
      };

      writeCsv(data);
      console.log('Update Contact was successful'.green);
    }
  }
}

module.exports = updateContact;
