// Code your solutions in this file
function writeCards(names, event) {
    const messages = [];//declare an empty array
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;//store the values
      messages.push(message);//push the storesd messages
    }
    return messages;
  }
  //countdown

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}
