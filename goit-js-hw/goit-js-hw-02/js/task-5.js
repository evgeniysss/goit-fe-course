'use strict';
const string = 'sdsd wfegeg sale qrwgrhth hrth spam wergwre';
const wordSpam = 'spam';
const wordSale = 'sale';
let result;

let words = string.split (' ');
console.log (words);

const checkForSpam = function(string) {
  
  let words = string.split (' ');

  for (const word of words) {
    if (word === wordSpam || word === wordSale) {
      result = true;
      break;
    } else {
      result = false;
    }
  }

  return result;
}

console.log (checkForSpam(string));














// || word === wordSale

// 'use strict';
// const string = 'Yoo dhdhfudh ususus nksjdk sjbdshdw';

// const findLongestWord = function(string) {

//   let words = string.split (' ');
//   let longestWord = words[0];

//   for (const word of words) {
//     if (longestWord.length < word.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord
// }

// console.log (findLongestWord(string));
