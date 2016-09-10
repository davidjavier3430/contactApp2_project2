function contactExist(data, email) {

  existContact = false;
  for (var i = 0; i < data.length; i++) {
    if(data[i].email === email) {
      existContact = true;
      break;
    }
  }
  return existContact;
}

module.exports = contactExist;
