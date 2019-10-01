'use strict';
const message = 'Wo dhfjdh jhdeu jde dwiodoe';
const pricePerWord = 50;

const calculateEngravingPrice = function(message, pricePerWord) {

  let messageMassive = message.split (' ');
  const totalPrice = messageMassive.length * pricePerWord;

  return totalPrice;
}

console.log (calculateEngravingPrice(message, pricePerWord));


// const messageMassive = message.split (' ');

// const totalPrice = messageMassive.length * pricePerWord;

// console.log (messageMassive);
// console.log (totalPrice);