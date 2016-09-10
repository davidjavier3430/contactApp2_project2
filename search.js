var prompt = require('prompt-sync')();


function searchContact(data) {
  var emailSearch = prompt('Enter a contact email: ');

  var filterList = data.filter(function(data) { return data.email === emailSearch; });
  if(filterList.length >= 1) {
  console.log(filterList);
} else {
  console.log('Contact not found');
  }
}

module.exports = searchContact;
