var prompt = require('prompt-sync')();
var contactExist = require('./contactExist');
var writeCsv = require('./writeCsv');
var colors = require('colors');

function addContact(data) {

      var first_name = String(prompt("first name: "));
      var last_name = String(prompt("last name: "));
      var phone = String(prompt("Phone Number: "));
      var email = String(prompt("Email: "));
      var city = String(prompt("City: "));
      var zipcode = String(prompt("Zipcode: "));
      var website = String(prompt("Website: "));
      var company = String(prompt("Company Name: "));

      existContact = contactExist(data, email);

      if(!existContact) {

          contactNew = {
          first_name: first_name,
          last_name:  last_name,
          phone:      phone,
          email:      email,
          city:       city,
          zipcode:    zipcode,
          website:    website,
          company:    company
         };

         data.push(contactNew);

         writeCsv(data);

         console.log('New Contact was successful'.green);
      } else {
        console.log('The email address you entered is already in use on other Contact'.red);
      }
}

module.exports = addContact;
