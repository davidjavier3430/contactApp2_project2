
function contactPosition(data, email) {
  positionContact = null;
  //console.log(data);
  for (var i = 0; i < data.length; i++) {
    if(data[i].email === email) {
      positionContact = i;
      break;
    }
  }
  return positionContact;
}

module.exports = contactPosition;
