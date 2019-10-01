'use strict';
const string = 'Yoo dhdhfudh ususus nksjdk sjbdshdw';

const findLongestWord = function(string) {

  let words = string.split (' ');
  let longestWord = words[0];

  for (const word of words) {
    if (longestWord.length < word.length) {
      longestWord = word;
    }
  }

  return longestWord
}

console.log (findLongestWord(string));
